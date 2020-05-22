import React from './node_modules/react'
import { useDispatch } from './node_modules/react-redux'
import { START_SORTING } from '../../redux/actionTypes'

const StartButton = () => {
  const dispatch = useDispatch()
  const handleStart = () => {
    dispatch({ type: START_SORTING })
  }
  return (
    <>
      <button onClick={handleStart}>START SORTING</button>
    </>
  )
}

export default StartButton
