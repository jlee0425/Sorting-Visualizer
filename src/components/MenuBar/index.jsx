import React, { useState } from 'react'
import AlgoSelector from './algoSelector'
import NewArrayButton from './generateArray'
import SizeSlider from './sizeSlider'
import StartButton from './startButton'
import './index.scss'

const Toolbar = () => {
  return (
    <div className='toolbar'>
      <NewArrayButton className='newBtn' />
      <AlgoSelector className='algoSelector' />
      <SizeSlider className='sizeSlider' />
      <StartButton className='startBtn' />
    </div>
  )
}

export default Toolbar
