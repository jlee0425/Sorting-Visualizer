import React, { useState, useEffect, useMemo } from 'react'

import Title from './components/Title'
import ToolBar from './components/ToolBar'
import AnimatedChart from './components/Chart'

import AppContext from './AppContext'
import { generateRandomArray } from './components/ToolBar/helper'
import 'semantic-ui-css/semantic.min.css'
import './App.css'

const App = () => {
  const [arr, setArray] = useState(generateRandomArray(16))
  const [algorithm, setAlgorithm] = useState(null)
  const [animations, setAnimations] = useState([])
  const [speed, setSpeed] = useState(500)
  const [sorted, setSorted] = useState(false)
  const [running, setRunning] = useState(false)
  useEffect(() => setSorted(false), [arr])
  useEffect(() => {
    const fetchAnimations = () => algorithm(arr)
    if (algorithm) setAnimations(fetchAnimations())
  }, [arr, algorithm, setRunning])
  const value = useMemo(
    () => ({
      arr,
      setArray,
      algorithm,
      setAlgorithm,
      speed,
      setSpeed,
      sorted,
      setSorted,
      running,
      setRunning
    }),
    [
      arr,
      setArray,
      algorithm,
      setAlgorithm,
      speed,
      setSpeed,
      sorted,
      setSorted,
      running,
      setRunning
    ]
  )
  return (
    <div style={styles.container}>
      <Title />
      <AppContext.Provider value={value}>
        <ToolBar />
        <AnimatedChart arr={arr} animations={animations} />
      </AppContext.Provider>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    maxWidth: '768px'
  }
}

export default App
