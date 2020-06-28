export const heapSort = arr => {
  let temp = [...arr],
    animations = []

  const swap = (arr, a, b) => {
    if (arr[a].key !== arr[b].key && arr[a].width !== arr[b].width) {
      animations.push([a, b])
      ;[arr[a], arr[b]] = [arr[b], arr[a]]
    }
  }
  const heapify = (arr, i, length = arr.length) => {
    let left = 2 * i + 1,
      right = 2 * i + 2,
      curMaxPos = i

    if (left < length && arr[left].width > arr[curMaxPos].width) {
      curMaxPos = left
    }

    if (right < length && arr[right].width > arr[curMaxPos].width) {
      curMaxPos = right
    }

    if (curMaxPos !== i) {
      swap(arr, i, curMaxPos)
      heapify(arr, curMaxPos, length)
    }
  }
  for (let i = Math.floor(temp.length / 2); i >= 0; i--) {
    heapify(temp, i)
  }
  for (let i = temp.length - 1; i >= 0; i--) {
    swap(temp, 0, i)
    heapify(temp, 0, i)
  }
  return animations
}

// module.exports = heapSort
