// Importing different components from their respective files
import About from "./About";
import Last from "./Other";
import Booking from "./Booking";
import Home from "./Home";
import Service from "./Service";
import Source from "./Source";

// Importing specific named exports from the "Contact" file
import { Contact as Cont, Mobile } from "./Contact";

// import './App.css'  // (Commented out) This would be used to apply global styles if needed

function App() {
  return (
    // React components must return a single parent element
    // Using React Fragment (<></>) to wrap multiple elements without adding an extra div
    <>
      {/* Heading elements */}
      <h1>Hello</h1>
      <h1>Welcome Here</h1>

      {/* Rendering imported components */}
      <About />
      <Last />
      <Booking />
      <Home />
      <Service />
      <Source />
      <Cont />  {/* Using "Contact" component, renamed as "Cont" during import */}
      <Mobile /> {/* Using "Mobile" component from the "Contact" file */}
    </>
  );
}

// Exporting the App component as the default export
export default App;
