import { Link } from "react-router-dom"

function Todo(){
    return(
        <>
        <h1>Welcome To Todo List</h1>
        <Link to="/Form"><button>Make List</button></Link>
        <Link to="/TodoList"><button>Make List By Local Storage</button></Link>
        <Link to="/Test"><button>Make List By Axios</button></Link>
        </>
    )
}
export default Todo