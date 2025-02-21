import { useState } from 'react'
import Home from './Component/Home'
import About from './Component/About'
import Services from './Component/Services'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Layout from './Component/Layout'

function App() {

  return (
  <>
    {/* <Home/>
    <About/>
    <Services/> */}
      {/* <Navbar/> */}
    <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/Services' element={<Services/>}/>
        </Route>
    </Routes>
      {/* <Footer/> */}
  </>
  )
}

export default App
