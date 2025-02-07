import Navbar from "./navbar"
import "./App.css"
function App() {
  let para = {
    color:"blue",
    backgroundColor:"green"
  }
  return (
    <>
    <Navbar/>
    <h1 style={{color:"red"}}>Welcome</h1>
    <p style={{backgroundColor:"green", color:"red"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    <p style={{...para, backgroundColor:"skyblue",  height:"300px"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis consectetur minus repellat delectus dolorem possimus deleniti, debitis voluptatem magni molestiae nam maxime explicabo voluptates id fuga qui, ipsa at quia?</p>
    <p style={para}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis consectetur minus repellat delectus dolorem possimus deleniti, debitis voluptatem magni molestiae nam maxime explicabo voluptates id fuga qui, ipsa at quia?</p>
    
    </>
  )
}

export default App
