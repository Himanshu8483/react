import React, { useState, useEffect } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('Work');
  const [todos, setTodos] = useState([]);

  // Load todos from localStorage on initial render
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  // Save todos to localStorage on every update
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (!task.trim()) return;

    const newTask = {
      id: Date.now(),
      task,
      category,
      completed: false,
      editing: false
    };

    setTodos([...todos, newTask]);
    setTask('');
    setCategory('Work');
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleCheckbox = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleStartEdit = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, editing: true } : todo
    );
    setTodos(updatedTodos);
  };

  const handleEdit = (id, newTask) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, task: newTask, editing: false } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>To-Do List (with Tagging)</h1>

      <input
        type="text"
        value={task}
        placeholder="Enter Task Name"
        onChange={(e) => setTask(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Work</option>
        <option>Personal</option>
        <option>Urgent</option>
      </select>

      <button onClick={handleAdd}>Add Task</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheckbox(todo.id)}
            />

            {todo.editing ? (
              <input
                type="text"
                defaultValue={todo.task}
                onBlur={(e) => handleEdit(todo.id, e.target.value)}
                autoFocus
              />
            ) : (
              <>
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                  {todo.task}
                </span>{' '}
                [{todo.category}]
              </>
            )}

            {!todo.editing && (
              <button onClick={() => handleStartEdit(todo.id)}>Edit</button>
            )}

            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
