import './App.css'
import { Route,Routes } from 'react-router-dom'
import Signup from './Component/Signup'
import Login from './Component/Login'
import Home from './Component/home'

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Signup/>}/>
      <Route path='Home' element={<Home/>}/>
      <Route path='Login' element={<Login/>}/>

    </Routes>
  {/* <Form/> */}
    </>
  )
}

export default App
