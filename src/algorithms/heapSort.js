import { CircularProgress } from '@material-ui/core'

let animations = []
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
    // animations.push([i, curMaxPos])
    ;[arr[i], arr[curMaxPos]] = [arr[curMaxPos], arr[i]]
    heapify(arr, curMaxPos, length)
  }
}
export const heapSort = arr => {
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    heapify(arr, i)
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    animations.push([0, i])
    ;[arr[0], arr[i]] = [arr[i], arr[0]]
    heapify(arr, 0, i)
  }
  console.log('after sort arr', arr)
  console.log('animations', animations)
  return animations
}

// module.exports = heapSort
