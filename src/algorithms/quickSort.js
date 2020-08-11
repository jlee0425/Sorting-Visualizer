import { swap } from './swap'

export const quickSort = arr => {
  let temp = [...arr],
    animations = []

  const partition = (array, start) => {
    let pivot = array[start],
      pIndex = start

    for (let i = start, length = array.length; i < length; i++) {
      if (array[i].width < pivot.width) {
        pIndex++
        if (array[pIndex].key !== array[i].key) {
          swap(array, pIndex, i, animations)
        }
      }
    }
    if (start !== pIndex) {
      swap(array, start, pIndex, animations)
    }
    return pIndex
  }

  const quickSortHelper = (array, start, end) => {
    let pivot = partition(array, start)

    if (start >= end) return array
    quickSortHelper(array, start, pivot)
    quickSortHelper(array, pivot + 1, end)

    return array
  }

  quickSortHelper(temp, 0, temp.length)

  return animations
}
