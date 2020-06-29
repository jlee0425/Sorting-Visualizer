import React from 'react'
import AlgoSelector from './algoSelector'
import NewArrayButton from './generateArray'
import CustomSlider from './CustomSlider'
import StartButton from './startButton'

const ToolBar = () => {
  return (
    <div style={styles.container}>
      <div style={styles.ToolBar1}>
        <NewArrayButton />
        <CustomSlider />
      </div>
      <div style={styles.ToolBar2}>
        <AlgoSelector />
      </div>
      <StartButton />
    </div>
  )
}

const styles = {
  ToolBar1: {
    display: 'flex',
    flexDirection: 'row'
  },
  ToolBar2: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginTop: '10px'
  }
}
export default ToolBar
