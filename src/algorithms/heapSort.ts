import {SwapArray, TargetArray} from '../types';
import {swap} from './swap';


const heapify = (
  arr: TargetArray,
  i: number,
  length: number,
  animations: SwapArray
) => {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let curMaxPos = i;

  if (left < length && arr[left].width > arr[curMaxPos].width) {
    curMaxPos = left;
  }

  if (right < length && arr[right].width > arr[curMaxPos].width) {
    curMaxPos = right;
  }

  if (curMaxPos !== i) {
    swap(arr, i, curMaxPos, animations);
    heapify(arr, curMaxPos, length, animations);
  }
};

export const heapSort = (arr: TargetArray) => {
  const temp = [...arr];
  const animations: SwapArray = [];


  for (let i = Math.floor(temp.length / 2); i >= 0; i--) {
    heapify(temp, i, temp.length, animations);
  }

  for (let i = temp.length - 1; i >= 0; i--) {
    swap(temp, 0, i, animations);
    heapify(temp, 0, i, animations);
  }
  return animations;
};
