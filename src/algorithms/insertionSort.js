export const insertionSort = arr => {
  if (arr.length < 2) return arr
  // assume the array is sorted when there is only one element
  let temp = [...arr],
    animations = []

  for (let i = 1, length = temp.length; i < length; i++) {
    // current element is bigger than the one on left
    if (temp[i].width < temp[i - 1].width) {
      // find a right pos from the rightmost pos to insert in sorted space
      for (let j = i; j >= 0; j--) {
        if (temp[j - 1]?.width > temp[j].width) {
          animations.push([j - 1, j])
          ;[temp[j - 1], temp[j]] = [temp[j], temp[j - 1]]
        }
      }
    }
  }
  console.log('insertion sort animations', arr, animations)
  return animations
}

// module.exports = insertionSort
