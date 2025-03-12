import axios from 'axios'
import {use, useEffect, useState} from 'react'

function App() {

  const [apiData, setApiData]= useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/students')
    .then(res=>{setApiData(res.data)})
  }, [del])

  function del(id){
    axios.delete(`http://localhost:3000/students/${id}`)
    .then(res=>alert("Deleted"))
  }
// post method 
const [insertData, setInsertData]= useState([])
function inputChange(e){
  const{name, value} = e.target 
  setInsertData({...insertData, [name]:value})
}

function postSubmit(e){
  e.preventDefault()
  axios.post("http://localhost:3000/students", insertData)
  .then(res=>{console.log(res.data)})
  .then(alert("Data Inserted"))
  // .then(res=>alert("Data Inserted"))
}

// put Method 
let [showForm, setForm] =useState(false)
let [editData, setEditData] = useState({})
function editChange(e){
  const{name, value} = e.target 
  setEditData({...editData, [name]: value})
}
function putSubmit(e){
  e.preventDefault()
  axios.put(`http://localhost:3000/students/${editData.id}`, editData)
}

// table Content 
const tableData =   
      apiData.map((e, index)=>{return<>
        <tr key={index}>
        <td>{index+1}</td>
        <td>{e.name}</td>
        <td>{e.age}</td>
        <td>{e.contact}</td>
        <td>{e.city}</td>
        <td><button onClick={()=>del(e.id)}>Delete</button></td>
        <td><button onClick={()=>(setForm(true), setEditData(e))}>Edit</button></td>
      </tr>
        </>
      })

  return (
    <>
      <table border="3" >
        <thead>
          <tr>
            <th>S No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Contact</th>
            <th>City</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
            {tableData}
        </tbody>
      </table>
      <h1>Post Method For Create</h1>
      <form onSubmit={postSubmit}>
        <label>Name</label>
        <input type="text" onChange={inputChange} name='name'/>&nbsp;&nbsp;
        <label>Age</label>&nbsp;&nbsp;
        <input type="text" onChange={inputChange} name='age'/>&nbsp;&nbsp;
        <label>City</label>&nbsp;&nbsp;
        <input type="text" onChange={inputChange} name='city'/>&nbsp;&nbsp;
        <label>Contact</label>&nbsp;&nbsp;
        <input type="text" onChange={inputChange} name='contact'/>&nbsp;&nbsp;
        <input type="submit" />&nbsp;&nbsp;
      </form>

      {showForm && (
      <form onSubmit={putSubmit}>
      <h1>Put Method for Update</h1>
        <label>Name</label>
        <input type="text" value={editData.name} onChange={editChange} name='name'/>&nbsp;&nbsp;
        <label>Age</label>&nbsp;&nbsp;
        <input type="text" value={editData.age} onChange={editChange} name='age'/>&nbsp;&nbsp;
        <label>City</label>&nbsp;&nbsp;
        <input type="text" value={editData.city} onChange={editChange} name='city'/>&nbsp;&nbsp;
        <label>Contact</label>&nbsp;&nbsp;
        <input type="text" value={editData.contact} onChange={editChange} name='contact'/>&nbsp;&nbsp;
        <input type="submit" />
      </form>
      )}
    </>
    
  )
 
}

export default App
