import { useEffect, useState } from 'react'
import './App.css'


function App() {
  // useEffect(()=>{}, [])
  let[sum,setSum]=useState(0)
  let [color, setColor]=useState("aquamarine")
  let Incre=()=>{
    setSum(sum+1)
  }
  let Decre=()=>{
    if (sum!=0){
    setSum(sum-1)
    }
  }

  useEffect(()=>{
    alert("Working..")
  },[color, sum])

  return (
    <>
    <div style={{height:"100vh", background:color}}>
      <button onClick={()=>setColor('red')}>Red</button>
      <button onClick={()=>setColor('blue')}>Blue</button>
    <h1>Hello</h1>
    <div>
      <h1>Count: {sum}</h1>
      <button onClick={()=>Incre()}>Increment</button>
      <button onClick={()=>Decre()}>Decrement</button>
    </div>
    </div>

    </>
  )
}

export default App
