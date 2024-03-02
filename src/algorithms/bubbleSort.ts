import { SwapArray, TargetArray } from '../types';
import { swap } from './swap';

const bubbleSort = (arr: TargetArray) => {
  if (arr.length < 2) return arr;

  const animations: SwapArray = [];
  const temp = [...arr];

  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < temp.length - 1; j++) {
      while (j < temp.length - 1 && temp[j].width > temp[j + 1].width) {
        swap(temp, j, j + 1, animations);
        j++;
      }
    }
  }

  return animations;
};

export default bubbleSort;
