import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SimpleTodoLocal from './Components/Way1';
import CategoryTodoLocal from './Components/Way2';
import CategoryTodoAPI from './Components/Way3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/simple" element={<SimpleTodoLocal />} />
        <Route path="/local" element={<CategoryTodoLocal />} />
        <Route path="/api" element={<CategoryTodoAPI />} />
      </Routes>
    </Router>
  );
}

export default App;
