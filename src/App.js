import React from 'react'
import Header from './components/Header'
import MenuBar from './components/MenuBar'
import Chart from './components/Chart'
import './App.scss'

function App () {
  return (
    <div className='container'>
      <Header />
      <MenuBar />
      <Chart />
    </div>
  )
}

export default App
