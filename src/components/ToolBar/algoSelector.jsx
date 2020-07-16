import React, { useContext, useEffect, useState } from 'react'
import { Button, Popup } from 'semantic-ui-react'
import { resizeHandler } from './helper'
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
  const [buttonSize, setButtonSize] = useState('large')
  const handleSelect = event => {
    switch (event.target.innerHTML) {
      case 'Bubble Sort':
        setAlgorithm(() => bubbleSort)
        return
      case 'Heap Sort':
        setAlgorithm(() => heapSort)
        return
      case 'Insertion Sort':
        setAlgorithm(() => insertionSort)
        return
      case 'Merge Sort':
        setAlgorithm(() => mergeSort)
        return
      case 'Quick Sort':
        setAlgorithm(() => quickSort)
        return
      default:
        return null
    }
  }
  useEffect(() => {
    const handleResize = () => {
      setButtonSize(resizeHandler())
    }
    window.addEventListener('resize', handleResize)
  })
  return (
    <React.Fragment>
      <Button.Group compact widths={1} size={buttonSize} onClick={handleSelect}>
        {/* <Popup
          content='Currently disabled due to an animation bug'
          trigger={
            <span>
            </span>
          }
          /> */}
        <Button>Merge Sort</Button>
        <Button.Or />
        <Button>Quick Sort</Button>
        <Button.Or />
        <Button>Heap Sort</Button>
        <Button.Or />
        <Button>Insertion Sort</Button>
        <Button.Or />
        <Button>Bububle Sort</Button>
      </Button.Group>
    </React.Fragment>
  )
}

export default AlgoSelector
