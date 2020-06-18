import React, { useContext } from 'react'
import AppContext from '../../AppContext'

const StartButton = () => {
  const { algorithm, setRunning } = useContext(AppContext)
  const handleStart = () => {
    if (algorithm) setRunning(true)
  }
  return (
    <>
      <button onClick={handleStart}>START SORTING</button>
    </>
  )
}

export default StartButton
