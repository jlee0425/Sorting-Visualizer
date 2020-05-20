import React from 'react'
import Bar from './bar'

const RegularChart = ({ data: arr }) => {
  return (
    <>
      {arr.map((height, index) => (
        <Bar
          key={index}
          color='lightblue'
          height={(height / arr.length) * 35}
          width={10}
        />
      ))}
    </>
  )
}

export default RegularChart
