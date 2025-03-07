import axios from 'axios'
import {useEffect, useState} from 'react'
import './App.css'

function App() {
  const [comment, setComment]=useState([])
  const tableData = comment.map((e)=>(
    <tr key={e.id}>
    <td>{e.name}</td>
    <td>{e.age}</td>
    <td>{e.contact}</td>
    <td>{e.city}</td>
    <td>{e.id}</td>
  </tr>
  ))
  useEffect(()=>{
    // axios.get('https://jsonplaceholder.typicode.com/comments')
    axios.get('http://localhost:3000/students')
    .then(res=>{console.log(res.data), setComment(res.data)})
  },[])
  return(
    <>
    <h1>Dashboard</h1>
    <div>
      <table border="2"  cellPadding={50}>
        <thead>
          <tr style={{background:"aquamarine"}}>
            <th>Name</th>
            <th>Age</th>
            <th>Contact</th>
            <th>City</th>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          {tableData}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default App
