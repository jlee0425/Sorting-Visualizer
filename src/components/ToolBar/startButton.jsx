import React, { useContext } from 'react'
import { Button } from 'semantic-ui-react'
import AppContext from '../../AppContext'

const StartButton = () => {
  const { algorithm, running, setRunning } = useContext(AppContext)
  const handleStart = () => {
    if (algorithm) setRunning(true)
  }
  return (
    <>
      <Button
        color='yellow'
        onClick={handleStart}
        style={{ width: '100%', marginTop: '10px' }}
      >
        {running ? 'Sorting In Progress...' : 'START SORTING'}
      </Button>
    </>
  )
}

export default StartButton
