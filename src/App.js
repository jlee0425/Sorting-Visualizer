import React, { useState, useMemo } from 'react'
import Header from './components/Header'
import ToolBar from './components/ToolBar'
import Chart from './components/Chart'

import AppContext from './AppContext'
import './App.scss'

const App = () => {
  const [arr, setArray] = useState([])
  const [algorithm, setAlgorithm] = useState(null)
  const [running, setRunning] = useState(false)

  const value = useMemo(
    () => ({
      arr,
      setArray,
      algorithm,
      setAlgorithm,
      running,
      setRunning
    }),
    [arr, setArray, algorithm, setAlgorithm, running, setRunning]
  )
  return (
    <div className='container'>
      <Header />
      <AppContext.Provider value={value}>
        <ToolBar />
        <Chart />
      </AppContext.Provider>
    </div>
  )
}

export default App
