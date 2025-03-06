
import './App.css'
import Task from './Task'
import UseState from './UseState'
import Inc from './Inc'
import State from './Component/State'
import Bg from './Component/Bg'


function App() {

  function fun(){
    alert("Event Working")
  }

  // call with arrow function
  function func(a){
    alert("Event Working "+a)
  }

  return (
    <>
        <h1>Welcome To Event Box</h1>
        <button onClick={fun}>Click Here</button> <br /> <br />

        {/* we have to make arrow function to to call variable */}
        {/* example */}


        <button onClick={()=>func("Himanshu Kushwaha Click")}>Click onClick</button> <br /> <br />
        <button onDoubleClick={()=>func("Himanshu Kushwaha DoubleClick")}>DoubleClick</button> <br /> <br />
        <button onMouseEnter={()=>func("Himanshu Kushwaha Enter")}>MouseEnter</button> <br /> <br />
        <button onMouseLeave={()=>func("Himanshu Kushwaha Leave")}>MouseLeave</button> <br /> <br />

        <Task/>
        <UseState/>
        <Inc/>
        <State/>
        <Bg/>

    </>
  )
}

export default App
