export const quickSort = arr => {
  let temp = [...arr],
    animations = []
  const swap = (arr, a, b) => {
    ;[arr[a], arr[b]] = [arr[b], arr[a]]
  }
  const partition = (arr, start) => {
    let pivot = arr[start],
      pIndex = start
    for (let i = start, length = arr.length; i < length; i++) {
      if (arr[i].width < pivot.width) {
        pIndex++
        if (arr[pIndex].key !== arr[i].key) {
          animations.push([pIndex, i])
          swap(arr, pIndex, i)
        }
      }
    }
    if (start !== pIndex) {
      animations.push([start, pIndex])
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
  quickSortHelper(temp)
  return animations
}
