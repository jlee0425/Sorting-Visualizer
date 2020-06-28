import React, { useContext, useEffect, useState } from 'react'
import { useTransition, animated } from 'react-spring'
import Container from '@material-ui/core/Container'

import AppContext from '../../AppContext'
import '../../App.scss'

const swap = (arr, i, j) => [
  ...arr.slice(0, i),
  arr[j],
  ...arr.slice(i + 1, j),
  arr[i],
  ...arr.slice(j + 1, arr.length)
]
const mergeSwap = (arr, from, to) => [
  ...arr.slice(0, to),
  arr[from],
  ...arr.slice(to, from),
  ...arr.slice(from + 1, arr.length)
]
const BAR_HEIGHT = 30
const AnimatedChart = ({ arr, animations }) => {
  const { algorithm, running, setRunning, setSorted } = useContext(AppContext)
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
  const startSorting = React.useCallback(() => {
    if (running) {
      for (let i = 0, length = animations.length; i < length; i++) {
        swapWithAnimation(animations, i, i * 500)
      }
      setSorted(true)
      setRunning(false)
    }
  }, [animations, running, setRunning, swapWithAnimation, setSorted])
  useEffect(() => {
    startSorting()
  }, [running, startSorting])
  useEffect(() => {
    setRunning(false)
    setOrder(arr)
  }, [arr, setRunning])
  let height = 0
  const transitions = useTransition(
    animatedArr.map(item => ({
      ...item,
      y: (height += 30) - 30
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
    <Container className='chart'>
      {transitions.map(({ item, props, key }, index) => (
        <animated.div
          key={key}
          className='card'
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
    </Container>
  )
}

export default AnimatedChart
