import React, { useState } from './node_modules/react'
import AlgoSelector from './algoSelector'
import NewArrayButton from './generateArray'
import SizeSlider from './sizeSlider'
import StartButton from './startButton'
import './index.scss'

const ToolBar = () => {
  return (
    <div className='ToolBar'>
      <NewArrayButton className='newBtn' />
      <AlgoSelector className='algoSelector' />
      <SizeSlider className='sizeSlider' />
      <StartButton className='startBtn' />
    </div>
  )
}

export default ToolBar
