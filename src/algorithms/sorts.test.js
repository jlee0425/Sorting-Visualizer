const bubbleSort = require('./bubbleSort')
const heapSort = require('./heapSort')
const insertionSort = require('./insertionSort')
const mergeSort = require('./mergeSort')
const quickSort = require('./quickSort')

const getRandomArray = size => {
  return [...Array(size)].map(() => {
    return Math.floor(Math.random() * size * 10) - size * 5
  })
}

const testSort = sortingAlgorithm => size => {
  test(`testing ${sortingAlgorithm.name}, size = ${size}`, () => {
    const arr = getRandomArray(size)
    const sortedArr = sortingAlgorithm(arr)
    expect(sortedArr).toStrictEqual(arr.sort((a, b) => a - b))
  })
}

const heavyTest = sortingAlgorithm => {
  for (let i = 0; i < 1000; i++) {
    testSort(sortingAlgorithm)(i)
  }
}

heavyTest(bubbleSort)
heavyTest(insertionSort)
heavyTest(heapSort)
heavyTest(mergeSort)
heavyTest(quickSort)
