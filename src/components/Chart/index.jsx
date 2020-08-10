import React, { useContext, useEffect, useState } from 'react'
import { useTransition, animated } from 'react-spring'

import AppContext from '../../AppContext'
import './chart.css'

const swap = (arr, i, j) => [
  ...arr.slice(0, i),
  arr[j],
  ...arr.slice(i + 1, j),
  arr[i],
  ...arr.slice(j + 1, arr.length)
]
const mergeSwap = (arr, from, to) => {
  const itemToMove = arr[from]
  return from > to
    ? [
        ...arr.slice(0, to),
        itemToMove,
        ...arr.slice(to, from),
        ...arr.slice(from + 1, arr.length)
      ]
    : [
        ...arr.slice(0, from),
        ...arr.slice(from + 1, to + 1),
        itemToMove,
        ...arr.slice(to + 1, arr.length)
      ]
}
const BAR_HEIGHT = 30
const AnimatedChart = () => {
  const {
    arr,
    animations,
    algorithm,
    running,
    sorted,
    speed,
    setRunning,
    setSorted
  } = useContext(AppContext)

  const [animatedArr, setOrder] = useState(arr)
  const swapWithAnimation = React.useCallback(
    (animations, i, ms) => {
      setTimeout(() => {
        const [item1, item2] = animations[i]
        if (algorithm && algorithm.name === 'mergeSort') {
          setOrder(arr => mergeSwap(arr, item1, item2))
        } else {
          setOrder(arr => swap(arr, item1, item2))
        }
      }, ms)
    },
    [algorithm]
  )
  useEffect(() => console.log(animatedArr), [animatedArr])

  const startSorting = React.useCallback(() => {
    if (running) {
      for (let i = 0, length = animations.length; i < length; i++) {
        swapWithAnimation(animations, i, i * speed)
      }
      setSorted(true)
      setTimeout(() => setRunning(false), animations.length * speed)
    }
  }, [animations, running, setRunning, swapWithAnimation, speed, setSorted])

  useEffect(() => {
    if (!sorted) startSorting()
  }, [sorted, running, startSorting])

  useEffect(() => {
    setRunning(false)
    setOrder(arr)
  }, [arr, setRunning])

  let height = 0
  const transitions = useTransition(
    animatedArr.map(item => ({
      ...item,
      y: (height += BAR_HEIGHT) - BAR_HEIGHT
    })),
    item => item.key,
    {
      from: ({ width }) => ({
        height: BAR_HEIGHT,
        width: width,
        opacity: 0
      }),
      leave: { opacity: 0 },
      enter: ({ y, width }) => ({ y, width, opacity: 1 }),
      update: ({ y, width }) => ({ y, width }),
      config: {
        duration: 300
      }
    }
  )

  return (
    <div className='chart'>
      {transitions.map(({ item, props, key }, index) => (
        <animated.div
          key={key}
          className='cellContainer'
          style={{
            zIndex: arr.length - index,
            transform: props.y.interpolate(y => `translate3d(0,${y}px,0)`),
            ...props
          }}
        >
          <div className='cell'>
            <div className='details'>
              {item.width.slice(0, item.width.length - 1)}
            </div>
          </div>
        </animated.div>
      ))}
    </div>
  )
}

export default AnimatedChart
