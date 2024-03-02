import { SwapArray, TargetArray } from '../types';
import { swap } from './swap';

const insertionSort = (arr: TargetArray) => {
  if (arr.length < 2) return arr;

  const temp = [...arr];
  const animations: SwapArray = [];

  for (let i = 1, { length } = temp; i < length; i++) {
    if (temp[i].width < temp[i - 1].width) {
      for (let j = i; j >= 0; j--) {
        if (temp[j - 1]?.width > temp[j].width) {
          swap(temp, j - 1, j, animations);
        }
      }
    }
  }

  return animations;
};

export default insertionSort;
