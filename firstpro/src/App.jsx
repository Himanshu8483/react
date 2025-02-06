import About from "./About"
import Last from "./Other"
import Booking from "./Booking"
import Home from "./Home"
import Service from "./Service"
import Source from "./Source"
import {Contact as Cont,Mobile} from "./Contact"
// import './App.css'
function App() {

  return (
    // error without taking parent element div because support only one parent element and childs can be multiple 
    <>
    <h1>Hello</h1>
    <h1>Welcome Here</h1>   
    <About />
    <Last/>
    <Booking/>
    <Home/>
    <Service/>
    <Source/>
    <Cont/>
    <Mobile/>
    </>
  )
}

export default App
