import React from "react";
import { Link,Outlet } from "react-router-dom";

const Navbar=() => {
    return (
        <>
        <nav>
        <h1>Logo</h1>
        <ul>
        <li><Link to='/'> Home</Link></li>
        <li><Link to='/User'> User</Link></li>
        <li><Link to='/User/1'> User 1</Link></li>
        <li><Link to='/User/2'> User 2</Link></li>
        <li><Link to='/User/3'> User 3</Link></li>

        </ul>
        </nav>
        <Outlet/>
        </>
    )
}
export default Navbar