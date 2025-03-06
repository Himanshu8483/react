import axios from 'axios'
import {useEffect} from 'react'
import './App.css'

function App() {
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(res=>{console.log(res.data)})
  },[])
  return(
    <>
    <h1>Hello</h1>
    </>
  )
}

export default App
