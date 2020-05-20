import React from 'react'
import Bar from './bar'

const RegularChart = ({ data: arr }) => {
  const setColor = status => {
    switch (status) {
      case 'unsorted':
        return 'lightblue'
      case 'swapping':
        return 'red'
      case 'sorted':
        return 'blue'
      default:
        return 'lightblue'
    }
  }
  return (
    <>
      {arr.map((bar, index) => (
        <Bar
          key={index}
          color={setColor(bar.status)}
          height={(bar.height / arr.length) * 8}
          width={10}
        />
      ))}
    </>
  )
}

export default RegularChart
