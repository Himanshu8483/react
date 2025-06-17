// CategoryTodoLocal.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const categoryColors = {
  Work: 'blue',
  Personal: 'green',
  Urgent: 'red',
};

function CategoryTodoLocal() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [category, setCategory] = useState('Work');

  useEffect(() => {
    const saved = localStorage.getItem('categoryTasks') || [];
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('categoryTasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!taskName.trim()) return;
    const newTask = {
      id: Date.now(),
      title: taskName,
      category,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskName('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const editTask = (id, newTitle) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, title: newTitle } : task
    ));
  };

  return (
    <div className="container">
      <h2>📌 Category-Based To-Do (LocalStorage)</h2>
      <Link to="/simple"><button>Simple Todo</button></Link>
      <Link to="/local"><button>Category Todo (LocalStorage)</button></Link>
      <Link to="/api"><button>Category Todo (Axios API)</button></Link>

      <input
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Work</option>
        <option>Personal</option>
        <option>Urgent</option>
      </select>
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ marginBottom: '10px' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />
            <input
              value={task.title}
              onChange={(e) => editTask(task.id, e.target.value)}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                marginRight: '10px',
              }}
            />
            <span
              style={{
                backgroundColor: categoryColors[task.category],
                color: 'white',
                padding: '2px 6px',
                borderRadius: '5px',
                marginRight: '10px',
              }}
            >
              {task.category}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryTodoLocal;
