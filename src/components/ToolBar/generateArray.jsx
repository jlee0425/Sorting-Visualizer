import React, { useContext } from 'react'
import { uuid } from 'uuidv4'

import AppContext from '../../AppContext'

export const generateRandomArray = size => {
  const MAX_WIDTH = 80
  return [...Array(size)].map(() => {
    return {
      width: `${Math.floor(Math.random() * MAX_WIDTH + 10)}%`,
      key: uuid()
    }
  })
}
const NewArrayButton = () => {
  const { arr, setArray } = useContext(AppContext)
  const handleButtonClick = () => {
    setArray(generateRandomArray(arr.length))
  }

  return (
    <React.Fragment>
      <button onClick={handleButtonClick}>New Array</button>
    </React.Fragment>
  )
}

export default NewArrayButton
