const swap = (arr, a, b) => {
  ;[arr[a], arr[b]] = [arr[b], arr[a]]
}
const bubbleSort = arr => {
  if (arr.length < 2) return arr
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1)
    }
  }
  return arr
}
const insertionSort = arr => {
  if (arr.length < 2) return arr

  for (let i = 1, length = arr.length; i < length; i++) {
    if (arr[i] < arr[i - 1]) {
      for (let j = i; j >= 0; j--) {
        if (arr[j - 1] > arr[j]) swap(arr, j - 1, j)
      }
    }
  }
  return arr
}
const heapSort = arr => {
  const heapify = (arr, i, length = arr.length) => {
    let left = 2 * i + 1,
      right = 2 * i + 2,
      curMaxPos = i

    if (left < length && arr[left] > arr[curMaxPos]) {
      curMaxPos = left
    }

    if (right < length && arr[right] > arr[curMaxPos]) {
      curMaxPos = right
    }

    if (curMaxPos !== i) {
      swap(arr, i, curMaxPos)
      heapify(arr, curMaxPos, length)
    }
  }
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    heapify(arr, i)
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    swap(arr, 0, i)
    heapify(arr, 0, i)
  }
  return arr
}
const mergeSort = arr => {
  const mergeSwap = (arr, from, to) => {
    let fromValue = arr[from],
      fromIndex = from
    while (fromIndex !== to) {
      arr[fromIndex] = arr[fromIndex - 1]
      fromIndex--
    }
    arr[to] = fromValue
  }

  const merge = (arr, start, mid, end) => {
    let start2 = mid + 1
    if (arr[mid] <= arr[start2]) {
      return
    }
    while (start <= mid && start2 <= end) {
      if (arr[start] <= arr[start2]) {
        start++
      } else {
        mergeSwap(arr, start2, start)
        start++
        mid++
        start2++
      }
    }
  }

  const mergeSortHelper = (arr, l = 0, r = arr.length - 1) => {
    if (l < r) {
      let m = Math.floor((l + r) / 2)

      mergeSortHelper(arr, l, m)
      mergeSortHelper(arr, m + 1, r)

      merge(arr, l, m, r)
    }
  }

  mergeSortHelper(arr)
  return arr
}
const quickSort = arr => {
  const partition = (arr, start) => {
    let pivot = arr[start],
      pIndex = start
    for (let i = start, length = arr.length; i < length; i++) {
      if (arr[i] < pivot) {
        pIndex++
        if (arr[pIndex] !== arr[i]) {
          swap(arr, pIndex, i)
        }
      }
    }
    if (start !== pIndex) {
      swap(arr, start, pIndex)
    }
    return pIndex
  }
  const quickSortHelper = (arr, start = 0, end = arr.length - 1) => {
    let pivot = partition(arr, start)

    if (start >= end) return arr
    quickSortHelper(arr, start, pivot)
    quickSortHelper(arr, pivot + 1, end)

    return arr
  }
  quickSortHelper(arr)
  return arr
}

const getRandomArray = size => {
  return [...Array(size)].map(() => {
    return Math.floor(Math.random() * size * 10) - size * 5
  })
}

const testSort = sortingAlgorithm => size => {
  test(`testing ${sortingAlgorithm.name}, size: 0 to ${size}`, () => {
    for (let i = 0; i < size; i++) {
      const arr = getRandomArray(size)
      const sortedArr = sortingAlgorithm(arr)
      expect(sortedArr).toStrictEqual(arr.sort((a, b) => a - b))
    }
  })
}

testSort(bubbleSort)(10000)
testSort(insertionSort)(10000)
testSort(heapSort)(10000)
testSort(mergeSort)(10000)
testSort(quickSort)(10000)
