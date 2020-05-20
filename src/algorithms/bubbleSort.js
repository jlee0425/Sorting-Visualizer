export const bubbleSort = arr => {
  if (arr.length < 2) return arr

  let animations = []
  let temp = [...arr]
  for (let i = 0; i < temp.length; i++) {
    for (let j = i + 1; j < temp.length; j++) {
      if (temp[i] > temp[j]) {
        animations.push([i, j])
        ;[temp[i], temp[j]] = [temp[j], temp[i]]
      }
    }
  }
  return animations
}

// module.exports = bubbleSort
