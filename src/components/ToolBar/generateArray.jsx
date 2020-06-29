import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'semantic-ui-react'

import { generateRandomArray, resizeHandler } from './helper'
import AppContext from '../../AppContext'

const NewArrayButton = () => {
  const { arr, setArray } = useContext(AppContext)
  const [buttonSize, setButtonSize] = useState('large')
  const handleButtonClick = () => {
    setArray(generateRandomArray(arr.length))
  }
  useEffect(() => {
    const handleResize = () => {
      setButtonSize(resizeHandler())
    }
    window.addEventListener('resize', handleResize)
  })
  return (
    <React.Fragment>
      <Button color='blue' onClick={handleButtonClick} size={buttonSize}>
        New <br /> Array
      </Button>
    </React.Fragment>
  )
}

export default NewArrayButton
