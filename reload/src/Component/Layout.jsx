import { Link, Outlet } from "react-router-dom";

function Layout(){
    return (
        <>
        <nav>
            <h1>Logo</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='About'>About</Link></li>
                <li><Link to='Services'>Services</Link></li>
            </ul>
        </nav>

        <div>
            <Outlet/>
        </div>
        
        <footer>
            <div>
        <h1>Footer Section</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='About'>About</Link></li>
                <li><Link to='Services'>Services</Link></li>
            </ul>
            </div>
        </footer>
        </>
    )
}
export default Layout 