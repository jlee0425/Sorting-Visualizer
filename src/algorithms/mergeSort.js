export const mergeSort = arr => {
  if (arr.length < 2) return arr

  const mid = Math.floor(arr.length / 2)
  let [leftArr, rightArr] = [arr.slice(0, mid), arr.slice(mid, arr.length)]

  leftArr = mergeSort(leftArr)
  rightArr = mergeSort(rightArr)

  return merge(leftArr, rightArr)
}

const merge = (arr1, arr2) => {
  let result = [],
    index1 = 0,
    index2 = 0
  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] < arr2[index2]) {
      result.push(arr1[index1++])
    } else {
      result.push(arr2[index2++])
    }
  }
  if (index1 < arr1.length) {
    result = [...result, ...arr1.slice(index1, arr1.length)]
  }
  if (index2 < arr2.length) {
    result = [...result, ...arr2.slice(index2, arr2.length)]
  }
  return result
}
// module.exports = mergeSort
