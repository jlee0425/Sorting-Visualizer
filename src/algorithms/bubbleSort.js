export const bubbleSort = arr => {
  if (arr.length < 2) return arr
  console.log('bubble arr', arr)
  let animations = []
  let temp = [...arr]
  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < temp.length - 1; j++) {
      if (temp[j].width > temp[j + 1].width) {
        animations.push([j, j + 1])
        ;[temp[j], temp[j + 1]] = [temp[j + 1], temp[j]]
      }
    }
  }
  return animations
}

// module.exports = bubbleSort
