import './App.css'
import Prac from './Practice'

// Main App Component
function App() {
  return (
    <>
      {/* Rendering the Practice Component and passing a prop */}
      <Prac name="User From Props" agee={22} />
    </>
  );
}

export default App
