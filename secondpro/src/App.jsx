import Navbar from "./navbar"; // Importing the Navbar component
import "./App.css"; // Importing external CSS file

function App() {
  // Defining a style object for reuse
  let para = {
    color: "blue", 
    backgroundColor: "green" 
  };

  return (
    <>
      {/* Rendering the Navbar component */}
      <Navbar />

      {/* Inline CSS example - Text color is set directly */}
      <h1 style={{ color: "red" }}>Welcome</h1>

      {/* Another inline CSS example - Setting background color and text color */}
      <p style={{ backgroundColor: "green", color: "red" }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

      {/* Using both object styles + inline styles together */}
      {/* The spread operator (...para) merges the existing object styles */}
      {/* The backgroundColor is overwritten by "skyblue" */}
      <p style={{ ...para, backgroundColor: "skyblue", height: "300px" }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

      {/* Using only the predefined object styles */}
      <p style={para}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </>
  );
}
export default App;
