import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import './App.css'
import User from './Component/User'

function App() {
    return(
      <>
      <Routes>
        {/* navbar is root parent  */}
        <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>} />
        {/* <Route path='/User/:name?/:age?' element={<User/>} /> */}
        <Route  path='/user' element={<User/>} >
          <Route path =':id' element={<User/>}/>
        </Route>
        </Route>
      </Routes>
      </>
    )
}

export default App

// Component life cycle 