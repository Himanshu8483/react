import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const API = 'http://localhost:3001/tasks';

const categoryColors = {
  Work: 'blue',
  Personal: 'green',
  Urgent: 'red',
};

function Test() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [category, setCategory] = useState('Work');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get(API);
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!taskName.trim()) return;
    const newTask = { title: taskName, category, completed: false };
    const res = await axios.post(API, newTask);
    setTasks([...tasks, res.data]);
    setTaskName('');
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API}/${id}`);
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = async (id) => {
    const task = tasks.find(t => t.id === id);
    const updated = { ...task, completed: !task.completed };
    const res = await axios.put(`${API}/${id}`, updated);
    setTasks(tasks.map(t => (t.id === id ? res.data : t)));
  };

  const editTask = async (id, newTitle) => {
    const task = tasks.find(t => t.id === id);
    const updated = { ...task, title: newTitle };
    const res = await axios.put(`${API}/${id}`, updated);
    setTasks(tasks.map(t => (t.id === id ? res.data : t)));
  };

  return (
    <div className="container">
        <Link to="/Form"><button>Make List</button></Link>
        <Link to="/TodoList"><button>Make List By Local Storage</button></Link>
        <Link to="/Test"><button>Make List By Axios</button></Link>
      <h2>Category-Based To-Do List</h2>

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
                borderRadius: '4px',
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

export default Test;
