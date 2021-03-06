import { swap } from './swap'

export const bubbleSort = arr => {
  if (arr.length < 2) return arr

  let animations = []
  let temp = [...arr]

  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < temp.length - 1; j++) {
      while (j < temp.length - 1 && temp[j].width > temp[j + 1].width) {
        swap(temp, j, j + 1, animations)
        j++
      }
    }
  }

  return animations
}
