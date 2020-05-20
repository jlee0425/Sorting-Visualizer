import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { useSprings, useTransition, animated } from 'react-spring'

import Container from '@material-ui/core/Container'
import AnimatedChart from './animatedChart'
import RegularChart from './regularChart'
import Bar from './bar'
import { UPDATE_ARRAY, FINISH_SORTING } from '../../redux/actionTypes'
import { bubbleSort } from '../../algorithms/bubbleSort'
import { heapSort } from '../../algorithms/heapSort'
import { insertionSort } from '../../algorithms/insertionSort'
import { mergeSort } from '../../algorithms/mergeSort'
import { quickSort } from '../../algorithms/quickSort'

const swap = (arr, id1, id2) => {
  let temp = arr[id1]
  arr[id1] = arr[id2]
  arr[id2] = temp
  return arr
}
const Chart = () => {
  const arr = useSelector(state => state.arr)
  const algorithm = useSelector(state => state.algorithm, shallowEqual)
  const isSorting = useSelector(state => state.isSorting)
  const dispatch = useDispatch()
  const [barWidth, setBarWidth] = useState(0)
  const [iter, setIter] = useState(0)
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

  if (isSorting) {
    const interval = setInterval(() => {
      const [id1, id2] = animations[iter]
      setIter(iter + 1)
      ;[arr[id1], arr[id2]] = [arr[id2], arr[id1]]
      console.log(arr)
      dispatch({ type: UPDATE_ARRAY, payload: arr })
    }, 1000)
    if (iter >= arr.length) {
      clearInterval(interval)
    }
  }
  const getAlgorithm = () => {
    switch (algorithm) {
      case 'bubbleSort':
        return bubbleSort
      case 'heapSort':
        return heapSort
      case 'insertionSort':
        return insertionSort
      case 'mergeSort':
        return mergeSort
      case 'quickSort':
        return quickSort
      default:
        return null
    }
  }
  const animations = bubbleSort(arr)
  let height = 0
  const transitions = useTransition(
    arr.map(data => ({ ...data, y: (height += data.height) - data.height })),
    d => d.name,
    {
      from: { height: 0, opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y, height }) => ({ y, height, opacity: 1 }),
      update: ({ y, height }) => ({ y, height })
    }
  )
  const springs = useSprings(
    arr.length,
    arr.map(item => ({
      from: { height: 0, background: 'white' },
      to: { height: item.height, background: '#9749FF', width: barWidth },
      config: { duration: 1000 }
    }))
  )
  return (
    <Container style={container}>
      {!isSorting
        ? springs.map(props => <animated.div style={props} />)
        : transitions.map(({ item, props: { y, ...rest }, key }, index) => (
            <animated.div
              key={key}
              class='card'
              style={{
                zIndex: arr.length - index,
                transform: y.interpolate(y => `translate3d(0,${y}px,0)`),
                ...rest
              }}
            >
              <div class='cell'>
                <div class='details' style={{ backgroundImage: item.css }} />
              </div>
            </animated.div>
          ))}
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
