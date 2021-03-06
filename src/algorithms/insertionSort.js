import { swap } from './swap'

export const insertionSort = arr => {
  if (arr.length < 2) return arr

  let temp = [...arr],
    animations = []

  for (let i = 1, length = temp.length; i < length; i++) {
    if (temp[i].width < temp[i - 1].width) {
      for (let j = i; j >= 0; j--) {
        if (temp[j - 1]?.width > temp[j].width) {
          swap(temp, j - 1, j, animations)
        }
      }
    }
  }

  return animations
}
