import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { useState } from "react";

function Signup() {
    // useState to manage user input (username, email, password)
    let [formdata, setformdata] = useState({
        username: "", 
        email: "", 
        password: ""
    });

    let loginnav = useNavigate(); // useNavigate() for redirecting to login page after signup

    // Function to handle input field changes
    function inpchange(e) {
        const { name, value } = e.target; // Get the name and value of the input field
        setformdata({ ...formdata, [name]: value }); // Update the corresponding field in state
    }

    // Function to handle form submission
    function finalsumbmit(e) {
        e.preventDefault(); // Prevents the page from reloading on form submission

        console.log(formdata); // Logs user input to console (for debugging)

        // Store user data in localStorage after converting to a string format (JSON)
        localStorage.setItem("userdata", JSON.stringify(formdata));

        // Redirect user to the login page after successful signup
        loginnav("/login"); 
    }

    return (
        <>
            <form onSubmit={finalsumbmit}>
                <label>Username</label>
                <input type="text" name="username" onChange={inpchange} /><br />

                <label>Email</label>
                <input type="text" name="email" onChange={inpchange} /><br />

                <label>Password</label>
                <input type="password" name="password" onChange={inpchange} /><br />

                <input type="submit" value="Sign Up" />
            </form>

            <h1>Signup Page</h1>
        </>
    );
}

export default Signup;
