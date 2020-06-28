export const mergeSort = arr => {
  let temp = [...arr],
    animations = []
  const mergeSwap = (arr, from, to) => {
    animations.push([from, to])
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
    if (arr[mid].width <= arr[start2].width) {
      return
    }
    while (start <= mid && start2 <= end) {
      if (arr[start].width <= arr[start2].width) {
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

  mergeSortHelper(temp)
  return animations
}
