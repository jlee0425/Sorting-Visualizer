export const bubbleSort = arr => {
  if (arr.length < 2) return arr
  let animations = []
  let temp = [...arr]
  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < temp.length - 1; j++) {
      while (j < temp.length - 1 && temp[j].width > temp[j + 1].width) {
        animations.push([j, j + 1])
        ;[temp[j], temp[j + 1]] = [temp[j + 1], temp[j]]
        j++
      }
    }
  }
  return animations
}
