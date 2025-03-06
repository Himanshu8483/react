import './App.css'
import Layout from './Component/Layout'
import Home from './Component/Home'
import About from './Component/About'
import Services from './Component/Services'
import { Route,Routes } from 'react-router-dom'
import Gallary from './Component/Gallary'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/Gallary' element={<Gallary/>}/>
        </Route>  
      </Routes>
    </>
  )
}

export default App
