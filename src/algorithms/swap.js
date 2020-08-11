export const swap = (arr, a, b, animations) => {
  if (arr[a].key !== arr[b].key && arr[a].width !== arr[b].width) {
    animations.push([a, b])
    ;[arr[a], arr[b]] = [arr[b], arr[a]]
  }
}

export const mergeSwap = (arr, from, to, animations) => {
  if (arr[from].key !== arr[to].key && arr[from].width !== arr[to].width) {
    animations.push([from, to])
    let fromValue = arr[from],
      fromIndex = from
    while (fromIndex !== to) {
      arr[fromIndex] = arr[fromIndex - 1]
      fromIndex--
    }
    arr[to] = fromValue
  }
}
