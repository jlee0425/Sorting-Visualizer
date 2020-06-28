import React, { useContext } from 'react'
import Slider from '@material-ui/core/Slider'
import AppContext from '../../AppContext'

import { generateRandomArray } from './generateArray'

const SizeSlider = () => {
  const { arr, setArray } = useContext(AppContext)
  const handleSlide = (event, value) => {
    setArray(generateRandomArray(value))
  }

  return (
    <React.Fragment>
      <header>Size & Speed</header>
      <Slider
        defaultValue={arr.length}
        onChange={handleSlide}
        aria-labelledby='discrete-slider'
        valueLabelDisplay='auto'
        step={2}
        marks
        min={8}
        max={20}
      />
    </React.Fragment>
  )
}

export default SizeSlider
