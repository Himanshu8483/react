import { useState } from "react";
import "./App.css";

let Task = () => {
  // State to track the current image
  const [image, setImage] = useState("laptop.jpg");

  function Mobile() {
    setImage("mobile.jpg"); // Change image when clicked
  }

  function Laptop() {
    setImage("laptop.jpg");
  }

  function Desktop() {
    setImage("desktop.jpg");
  }

  function Tablet() {
    setImage("tablet.jpg");
  }

  return (
    <>
      <div id="flex">
        {/* Image Selection Buttons */}
        <div id="images">
          <h2 onClick={Laptop}>Laptop</h2>
          <h2 onClick={Mobile}>Mobile</h2>
          <h2 onClick={Desktop}>Desktop</h2>
          <h2 onClick={Tablet}>Tablet</h2>
        </div>

        {/* Display Image */}
        <div>
          <img src={image} alt="Device" style={{ width: "700px", height: "700px" }} />
        </div>
      </div>
    </>
  );
};

export default Task;
