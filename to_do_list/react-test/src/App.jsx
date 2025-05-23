import { Route, Routes } from 'react-router-dom'
import './App.css'
import Todo from './Component/Todo'
import Form from './Component/Form'
import TodoList from './Component/TodoList'
import Test from './Component/Test'

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Todo/>}/>
      <Route path='/Form' element={<Form/>}/>
      <Route path='/TodoList' element={<TodoList/>}/>
      <Route path='/Test' element={<Test/>}/>

    </Routes>
    </>
  )
}

export default App
