import { Link } from "react-router-dom"

function Gallary(){
    return(
        <>
        <h1 style={{background:'aquamarine', padding:'50px', color:'black', fontWeight:'bold'}}>Gallary Section</h1>   
        <button><Link to="/">Home Section</Link></button> 
        </>
    )

}
export default Gallary