import React from './node_modules/react'
import Slider from './node_modules/@material-ui/core/Slider'
import { useDispatch, useSelector } from './node_modules/react-redux'

import { UPDATE_ARRAY } from '../../redux/actionTypes'
import { generateRandomArray } from './generateArray'

const SizeSlider = () => {
  const arr = useSelector(state => state.arr)
  const dispatch = useDispatch()

  const handleSlide = (event, value) => {
    dispatch({ type: UPDATE_ARRAY, payload: generateRandomArray(value) })
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
