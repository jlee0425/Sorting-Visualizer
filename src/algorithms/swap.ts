import { SwapArray, TargetArray } from '../types';

export const swap = (
  arr: TargetArray,
  a: number,
  b: number,
  animations: SwapArray,
) => {
  if (arr[a].key !== arr[b].key && arr[a].width !== arr[b].width) {
    animations.push([a, b]);
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }
};

export const mergeSwap = (
  arr: TargetArray,
  from: number,
  to: number,
  animations: SwapArray,
) => {
  if (arr[from].key !== arr[to].key
    && arr[from].width !== arr[to].width) {
    animations.push([from, to]);

    const fromValue = arr[from];
    let fromIndex = from;
    while (fromIndex !== to) {
      arr[fromIndex] = arr[fromIndex - 1];
      fromIndex--;
    }
    arr[to] = fromValue;
  }
};
