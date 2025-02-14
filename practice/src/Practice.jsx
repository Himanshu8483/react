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
  let arr=[1,2,3,4]
  let [one, two, three] = arr
  const {first, last}= person;
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
          <li><FaSearch style={{backgroundColor:"green", padding:"10px"}}/> Search</li>
          <li><FcHome /> Service</li>
          <li><FcServices /> Contact</li>
          <li><FcAbout /> Others</li>
        </ul>
      </nav>

      {/* Displaying passed props and function outputs */}
      <h1>Welcome {name}</h1>
      {showAlert()}
      Function Output after Calculation: {doubleValue(10)}
      <h1>Access Array by Destructuring {one}, {two}, {three}</h1>
      <p>{work} & Your Age is {age} Years & Name: {person.first} {last}</p>

      <Pr1 name={name} agee={agee}/>
    </>
  );
};

export default Practice;
