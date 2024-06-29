import React from 'react'
import Navbar from './components/Header/Navbar'
import Banner from './components/Header/Banner'
import Why from './components/Body/Why'
import MissionVision from './components/Body/MissionVision'
import Core from './components/Body/Core'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Why/>
      <MissionVision/>
      <Core/>
    </div>
  )
}

export default App
