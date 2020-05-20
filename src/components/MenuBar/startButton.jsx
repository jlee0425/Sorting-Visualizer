import React from 'react'
import { useDispatch } from 'react-redux'
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
