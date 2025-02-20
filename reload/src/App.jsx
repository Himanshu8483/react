import { useState } from 'react'
import Home from './Component/Home'
import About from './Component/About'
import Services from './Component/Services'
import './App.css'
import { Route,Routes } from 'react-router-dom'

function App() {

  return (
  <>
    {/* <Home/>
    <About/>
    <Services/> */}
    <Routes>
    <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='/Services' element={<Services/>}/>
    </Routes>

  </>
  )
}

export default App
