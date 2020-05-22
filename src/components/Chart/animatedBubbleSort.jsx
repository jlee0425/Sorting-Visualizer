import React, { useRef } from 'react'
import { useSprings, animated } from 'react-spring'
import { bubbleSort } from '../../algorithms/bubbleSort'

const swap = (arr, id1, id2) => {
  let temp = arr[id1]
  arr[id1] = arr[id2]
  arr[id2] = temp
  return arr
}
const fn = (order, down, originalIndex, curIndex, y) => index =>
  down && index === originalIndex
    ? {
        y: curIndex * 100 + y,
        scale: 1.1,
        zIndex: '1',
        shadow: 15,
        immediate: n => n === 'y' || n === 'zIndex'
      }
    : {
        y: order.indexOf(index) * 100,
        scale: 1,
        zIndex: '0',
        shadow: 1,
        immediate: false
      }

const AnimatedBubbleSort = ({ arr, barWidth }) => {
  const order = useRef(arr.map((item, index) => index))
  const [springs, setSprings] = useSprings(arr.length, fn(order.current))
  const animations = bubbleSort(arr)
  const springs1 = useSprings(
    arr.length,
    arr.map(item => ({
      from: { height: 0, background: 'white' },
      to: { height: item.height, background: '#9749FF', width: barWidth },
      config: { duration: 1000 }
    }))
  )
  return (
    <>
      {springs1.map((props, index) => (
        <animated.div key={index} style={props} />
      ))}
    </>
  )
}

export default AnimatedBubbleSort
