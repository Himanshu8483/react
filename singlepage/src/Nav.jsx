import './App.css'
import {FaHome} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
let Nav=()=>{
    return(
        <>

        <nav className="navbar">
            <h1>CAR G</h1>
            <ul>
                <li><FaHome color='skyblue' size={30}/> Home</li>
                <li><FaSearch/> About</li>
                <li>Service</li>
                <li>Contact</li>
                <li>Others</li>
            </ul>
        </nav>
        <section className='heroSec'>
            <div>
            <h1>Welcome to Our Unique Collection </h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsum veritatis adipisci uptates, ex cumque, est sapiente accusantium libero? Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
            </div>
            <img src="car.png" alt="" />
        </section>
        </>
    )
}
export default Nav;