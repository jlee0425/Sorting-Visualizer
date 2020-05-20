export const insertionSort = arr => {
  if (arr.length < 2) return arr
  // assume the array is sorted when there is only one element
  for (let i = 1; i < arr.length; i++) {
    // current element is bigger than the one on left
    if (arr[i] < arr[i - 1]) {
      // find a right pos from the rightmost pos to insert in sorted space
      for (let j = i; j >= 0; j--) {
        if (arr[j - 1] > arr[j]) {
          ;[arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
        }
      }
    }
  }

  return arr
}

// module.exports = insertionSort
