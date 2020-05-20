import React from 'react'
import Bar from './bar'

const AnimatedChart = ({ arr, animations }) => {
  return (
    <>
      {animations.map((height, index) => {
        return (
          <Bar
            key={index}
            color=''
            height={(height / arr.length) * 35}
            width={10}
          />
        )
      })}
    </>
  )
}

export default AnimatedChart
