import React, { useContext } from 'react'

import AppContext from '../../AppContext'
import {
  bubbleSort,
  heapSort,
  insertionSort,
  mergeSort,
  quickSort
} from '../../algorithms'

const AlgoSelector = () => {
  const { setAlgorithm } = useContext(AppContext)
  const handleSelect = event => {
    switch (event.target.value) {
      case 'bubbleSort':
        setAlgorithm(() => bubbleSort)
        return
      case 'heapSort':
        setAlgorithm(() => heapSort)
        return
      case 'insertionSort':
        setAlgorithm(() => insertionSort)
        return
      case 'mergeSort':
        setAlgorithm(() => mergeSort)
        return
      case 'quickSort':
        setAlgorithm(() => quickSort)
        return
      default:
        return null
    }
  }

  return (
    <React.Fragment>
      <select onChange={handleSelect}>
        <option disabled selected hidden>
          Algorithm
        </option>
        <option value='mergeSort'>Merge Sort</option>
        <option value='quickSort'>Quick Sort</option>
        <option value='bubbleSort'>Bubble Sort</option>
        <option value='insertionSort'>Insertion Sort</option>
        <option value='heapSort'>Heap Sort</option>
      </select>
    </React.Fragment>
  )
}

export default AlgoSelector
