import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { uuid } from 'uuidv4'
import { UPDATE_ARRAY } from '../../redux/actionTypes'

export const generateRandomArray = size => {
  const MAX_HEIGHT = 600
  return [...Array(size)].map(() => {
    return {
      height: Math.floor(Math.random() * MAX_HEIGHT + 20),
      key: uuid()
    }
  })
}
const NewArrayButton = () => {
  const arr = useSelector(state => state.arr)
  const dispatch = useDispatch()
  const handleButtonClick = () => {
    dispatch({ type: UPDATE_ARRAY, payload: generateRandomArray(arr.length) })
  }
  return (
    <React.Fragment>
      <button onClick={handleButtonClick}>New Array</button>
    </React.Fragment>
  )
}

export default NewArrayButton
