import './App.css'
import {FcHome} from "react-icons/fc";
import {FcAbout} from "react-icons/fc";
import {FcServices} from "react-icons/fc";
import {FcContacts} from "react-icons/fc";

let Footer=()=>{
    return(
        <>
        <section className='footSec'>
            <div className='footer'>
            <div>
                <strong className='logo'>CAR G</strong>
                <p>Welcome to Our Best Quality Products. Your well-being matters! We're here to support you every step of the way!</p>
                
            </div>
            <div>
                <span>Quick Link</span>
                <ul className='ull'>
                    <li><FcHome size={40}/> Home</li>
                    <li><FcAbout/> About</li>
                    <li><FcServices/> Service</li>
                    <li>Contact</li>
                    <li>Others</li>
                </ul>
            </div>
            <div><span>Contact</span>
            <p>
                Phone: +123 456 7890 <br />
                Email: contact@doctorcare.com <br />
                Location: 123 Health Street, City, Country</p></div>
            <div><span>Follow Us</span><br />
            </div>
            </div>
        <div>© 2025 CAR G. All Rights Reserved.</div>
        </section>
        </>
    )
}
export default Footer;