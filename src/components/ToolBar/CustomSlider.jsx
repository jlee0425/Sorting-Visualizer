import React, { useContext } from 'react'
import { Header } from 'semantic-ui-react'
import { Slider } from 'react-semantic-ui-range'
import AppContext from '../../AppContext'

import { generateRandomArray } from './helper'

const CustomSlider = () => {
  const { setArray, setSpeed } = useContext(AppContext)

  const sizeSettings = {
    start: 16,
    min: 8,
    max: 30,
    step: 2,
    onChange: value => setArray(generateRandomArray(value))
  }
  const speedOptions = [100, 200, 300, 400, 500, 800, 1000]
  const speedSettings = {
    start: 4,
    min: 1,
    max: 7,
    step: 1,
    onChange: value => setSpeed(speedOptions[speedOptions.length - value])
  }
  return (
    <div style={styles.container}>
      <div style={styles.sliderContainer}>
        <span>
          <Header size='small' color='grey' style={{ marginRight: '14px' }}>
            Size
          </Header>
        </span>
        <Slider settings={sizeSettings} color='olive' style={styles.slider} />
      </div>
      <div style={styles.sliderContainer}>
        <span>
          <Header size='small' color='grey'>
            Speed
          </Header>
        </span>
        <Slider settings={speedSettings} color='teal' style={styles.slider} />
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sliderContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    marginLeft: '10px'
  },
  slider: {
    width: '60vw',
    maxWidth: '600px'
  }
}
export default CustomSlider
