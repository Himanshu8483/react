import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

function About(){
    return (
        <>
        <Button style={{background:'black'}}><Link to='/services'>Go to Services</Link></Button>
        <h1>About Section</h1>
        </>
    )
}
export default About 