import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { UPDATE_ARRAY } from '../../redux/actionTypes'

export const generateRandomArray = size => {
  return [...Array(size)].map(() => {
    return Math.floor(Math.random() * size * 18 + 20)
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
