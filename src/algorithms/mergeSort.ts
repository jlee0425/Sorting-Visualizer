import {SwapArray, TargetArray} from '../types';
import {mergeSwap} from './swap';

export const mergeSort = (arr: TargetArray) => {
  const temp = [...arr];
  const animations: SwapArray = [];

  const merge = (
    arr: TargetArray,
    start: number,
    mid: number,
    end: number
  ) => {
    let start2 = mid + 1;
    if (arr[mid].width <= arr[start2].width) {
      return;
    }
    while (start <= mid && start2 <= end) {
      if (arr[start].width <= arr[start2].width) {
        start++;
      } else {
        mergeSwap(arr, start2, start, animations);
        start++;
        mid++;
        start2++;
      }
    }
  };

  const mergeSortHelper = (
    arr: TargetArray,
    l = 0,
    r = arr.length - 1
  ) => {
    if (l < r) {
      const m = Math.floor((l + r) / 2);

      mergeSortHelper(arr, l, m);
      mergeSortHelper(arr, m + 1, r);

      merge(arr, l, m, r);
    }
  };

  mergeSortHelper(temp);

  return animations;
};
