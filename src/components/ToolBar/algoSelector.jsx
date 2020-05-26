import React from 'react'

import { UPDATE_ALGORITHM } from '../../redux/actionTypes'
import { useDispatch } from 'react-redux'

const AlgoSelector = () => {
  const dispatch = useDispatch()

  const handleSelect = event => {
    dispatch({ type: UPDATE_ALGORITHM, payload: event.target.value })
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
