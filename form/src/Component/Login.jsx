import { Link, useNavigate } from "react-router-dom"; // Import Link for navigation between pages and useNavigate for redirection
import { useEffect, useState } from "react"; // Import useEffect for fetching data on component load and useState for state management

function Login() {
    let homepage = useNavigate(); // useNavigate() is used for programmatically navigating to another page

    // State to store user input (username & password) 
    let [formdata, setformdata] = useState({
        username: "", 
        password: ""
    });

    // State to store the registered user data from localStorage
    let [signdata, setsign] = useState(null); // Initialize as null to avoid errors

    // Function to update formdata when user types in input fields
    function inpchange(e) {
        const { name, value } = e.target; // Get input name and value
        setformdata({ ...formdata, [name]: value }); // Update state dynamically
    }

    // Function to handle form submission
    function finalsubmit(e) {
        e.preventDefault(); // Prevents page reload when form is submitted

        // Check if user data exists in localStorage
        if (!signdata) {
            alert("No user found. Please sign up first.");
            return;
        }

        // Validate username and password
        if (signdata.username !== formdata.username || signdata.password !== formdata.password) {
            alert("User not found"); // Alert if credentials do not match
        } else {
            alert("Login successful!"); // Show success message
            homepage("/Home"); // Redirect user to the Home page
        }
    }

    // useEffect runs once when the component loads, fetching user data from localStorage
    useEffect(() => {
        let sign = JSON.parse(localStorage.getItem("userdata")); // Retrieve user data from localStorage and convert it to an object
        setsign(sign); // Set retrieved data into signdata state
    }, []);

    return (
        <>
            <form onSubmit={finalsubmit}>
                <label>Username</label>
                <input type="text" name="username" onChange={inpchange} />

                <label>Password</label>
                <input type="password" name="password" onChange={inpchange} />

                <input type="submit" value="Login" />
            </form>

            <h1>Login Page</h1>
            
            <Link to='/'>SignUp</Link> {/* Link to navigate to the SignUp page */}
        </>
    );
}

export default Login;
