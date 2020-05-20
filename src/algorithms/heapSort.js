export const heapSort = arr => {
  // build maxheap
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    heapify(arr, i)
  }

  // swap and build maxheap
  for (let i = arr.length - 1; i > 0; i--) {
    ;[arr[0], arr[i - 1]] = [arr[i - 1], arr[0]]
    heapify(arr, 0)
  }
  return arr
}

const heapify = (arr, i) => {
  let left = 2 * i + 1,
    right = 2 * i + 2,
    curMaxPos = i,
    length = arr.length

  if (left < length && arr[left] > arr[curMaxPos]) {
    curMaxPos = left
  }

  if (right < length && arr[right] > arr[curMaxPos]) {
    curMaxPos = right
  }

  if (curMaxPos !== i) {
    ;[arr[i], arr[curMaxPos]] = [arr[curMaxPos], arr[i]]
    heapify(arr, curMaxPos)
  }
}

// module.exports = heapSort
