import axios from 'axios'
import { useEffect, useState} from 'react'

function App() {
  // State to store API data
  const [apiData, setApiData]= useState([])

    // Fetch data from API when component mounts
  useEffect(()=>{
    axios.get('http://localhost:3000/students')
    .then(res=>{setApiData(res.data)})
  }, [del])     // not pass in google

    // Function to delete a student by ID
  function del(id){
    axios.delete(`http://localhost:3000/students/${id}`)
    .then(res=>alert("Deleted"))
  }
// post method 
  // State to store form input data for inserting a new student
const [insertData, setInsertData]= useState({})
  // Handle input change for post method
function inputChange(e){
  const{name, value} = e.target 
  setInsertData({...insertData, [name]:value})
}
  // Function to submit new student data (POST request)
function postSubmit(e){
  e.preventDefault()
  axios.post("http://localhost:3000/students", insertData)
  .then(res=>{console.log(res.data)})
  .then(alert("Data Inserted"))
}

// put Method 
  // State to manage edit form visibility
let [showForm, setForm] =useState(false)
  // State to store student data for editing
let [editData, setEditData] = useState({})
  // Handle input change for editing
function editChange(e){
  const{name, value} = e.target 
  setEditData({...editData, [name]: value})
}
  // Function to update student data (PUT request)
function putSubmit(e){
  e.preventDefault()
  axios.put(`http://localhost:3000/students/${editData.id}`, editData)
  setForm(false);
  alert("Data Updated");
}

  // Generate table content dynamically from API data
const tableData =   
      apiData.map((e, index)=>(
        <tr key={e.id}>
        <td>{index+1}</td>
        <td>{e.name}</td>
        <td>{e.age}</td>
        <td>{e.contact}</td>
        <td>{e.city}</td>
        <td><button onClick={()=>del(e.id)}>Delete</button></td>
        <td><button onClick={()=>(setForm(true), setEditData(e))}>Edit</button></td>
      </tr>
      ))

  return (
    <>
          {/* Table to display students' data */}
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

            {/* Form to add new student data */}
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

      {/* Form to edit student data (only visible when editing) */}
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
