import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import Container from '@material-ui/core/Container'
import AnimatedBubbleSort from './animatedBubbleSort'

const Chart = () => {
  const arr = useSelector(state => state.arr)
  const algorithm = useSelector(state => state.algorithm, shallowEqual)
  const dispatch = useDispatch()
  const [barWidth, setBarWidth] = useState(30)
  useEffect(() => {
    const length = arr.length
    if (length < 12) {
      setBarWidth(30)
    } else if (length < 16) {
      setBarWidth(24)
    } else {
      setBarWidth(18)
    }
  }, [arr.length])
  const getAlgorithm = () => {
    switch (algorithm) {
      case 'bubbleSort':
        return
      case 'heapSort':
        return
      case 'insertionSort':
        return
      case 'mergeSort':
        return
      case 'quickSort':
        return
      default:
        return null
    }
  }

  return (
    <Container style={container}>
      {arr.length > 0 && <AnimatedBubbleSort arr={arr} barWidth={barWidth} />}
    </Container>
  )
}
const container = {
  width: '100%',
  height: '700px',
  background: '#E5F2E5',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'flex-end'
}
export default Chart
