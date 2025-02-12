// Import necessary files and components
import { FaHome, FaSearch } from "react-icons/fa"; // Importing specific icons
import { FcAbout, FcServices, FcHome } from "react-icons/fc";

import Pr1 from "./Pr1"



// Practice Component Definition
// const Practice = ({name,agee}) => {
const Practice = (props) => {
  <Pr1/>
  // Destructuring of props
  let {name, agee}= props
  // Defining variables
  let work = "React Practice";
  let person = {
    first: "Himanshu",
    last: "Kushwaha"
  };
console.log(person.first)
  // Function to show an alert
  function showAlert() {
    alert("working");
  };

  

  
  // Function to return sum of a number with itself
  function doubleValue(a) {
    return a + a;
  }

  // Prompting user to enter age
  let age = prompt("Enter Your Age:");


  return (
    <>
      {/* Navigation Bar with Icons */}
      <nav className="navbar">
        <h1>React Icons {name}, Age: {agee}</h1>
        <ul style={{ display: "flex", justifyContent: "space-evenly" }}>
          <li><FaHome color='skyblue' size={20} /> Home</li>
          <li><FaSearch /> Search</li>
          <li><FcHome /> Service</li>
          <li><FcServices /> Contact</li>
          <li><FcAbout /> Others</li>
        </ul>
      </nav>

      {/* Displaying passed props and function outputs */}
      <h1>Welcome {name}</h1>
      {showAlert()}
      Function Output after Calculation: {doubleValue(10)}
      <p>{work} & Your Age is {age} Years & Name: {person.first}</p>

      <Pr1 name={name}/>
    </>
  );
};

export default Practice;
