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
        <Button>Heap Sort</Button>
        <Button.Or />
        <Button>Insertion Sort</Button>
        <Button.Or />
        <Button>Bubble Sort</Button>
        <Button.Or />
        <Button>Quick Sort</Button>
        <Button.Or />
        <Popup
          trigger={
            <span>
              <Button>Merge Sort</Button>
            </span>
          }
        >
          <Popup.Header>Currently Disabled</Popup.Header>
          <Popup.Content>
            The function works as intended in development, but it breaks the app
            when deployed on netlify. Currently working on a fix.
          </Popup.Content>
        </Popup>
      </Button.Group>
    </React.Fragment>
  )
}

export default AlgoSelector
