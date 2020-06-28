import React, { useState, useEffect, useMemo } from 'react'

import Header from './components/Header'
import ToolBar from './components/ToolBar'
import AnimatedChart from './components/Chart'

import AppContext from './AppContext'
import { generateRandomArray } from './components/ToolBar/generateArray'
import './App.scss'

const App = () => {
  const [arr, setArray] = useState(generateRandomArray(8))
  const [algorithm, setAlgorithm] = useState(null)
  const [animations, setAnimations] = useState([])
  const [sorted, setSorted] = useState(false)
  const [running, setRunning] = useState(false)
  useEffect(() => {
    setAnimations([])
    const fetchAnimations = () => algorithm(arr)
    if (algorithm && !sorted) setAnimations(fetchAnimations())
  }, [arr, algorithm, setRunning, sorted])
  const value = useMemo(
    () => ({
      arr,
      setArray,
      algorithm,
      setAlgorithm,
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
      sorted,
      setSorted,
      running,
      setRunning
    ]
  )
  return (
    <div className='container'>
      <Header />
      <AppContext.Provider value={value}>
        <ToolBar />
        <AnimatedChart arr={arr} animations={animations} />
      </AppContext.Provider>
    </div>
  )
}

export default App
