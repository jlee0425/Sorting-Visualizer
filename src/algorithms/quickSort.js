export const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start < end) {
    const pIndex = partition(arr, start, end)
    quickSort(arr, start, pIndex - 1)
    quickSort(arr, pIndex + 1, end)
  }
  return arr
}

const partition = (arr, start, end) => {
  const pivot = arr[Math.floor((start + end) / 2)]
  let pIndex = start
  for (let i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      ;[arr[i], arr[pIndex]] = [arr[pIndex], arr[i]]
      pIndex++
    }
  }
  ;[arr[end], arr[pIndex]] = [arr[pIndex], arr[end]]
  return pIndex
}

// module.exports = quickSort
