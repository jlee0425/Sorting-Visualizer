import { SwapArray, TargetArray } from '../types';
import { swap } from './swap';

const quickSort = (arr: TargetArray) => {
  const temp = [...arr];
  const animations: SwapArray = [];

  const partition = (array: TargetArray, start: number) => {
    const pivot = array[start];
    let pIndex = start;

    for (let i = start, { length } = array; i < length; i++) {
      if (array[i].width < pivot.width) {
        pIndex++;
        if (array[pIndex].key !== array[i].key) {
          swap(array, pIndex, i, animations);
        }
      }
    }
    if (start !== pIndex) {
      swap(array, start, pIndex, animations);
    }
    return pIndex;
  };

  const quickSortHelper = (array: TargetArray, start: number, end: number) => {
    const pivot = partition(array, start);

    if (start >= end) return array;
    quickSortHelper(array, start, pivot);
    quickSortHelper(array, pivot + 1, end);

    return array;
  };

  quickSortHelper(temp, 0, temp.length);

  return animations;
};

export default quickSort;
