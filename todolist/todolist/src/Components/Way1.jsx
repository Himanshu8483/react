// SimpleTodoLocal.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SimpleTodoLocal() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("simpleTasks")) || [];
    setTasks(savedTasks);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem("simpleTasks", JSON.stringify(updatedTasks));
    setTask("");
  };

  const clearTasks = () => {
    localStorage.removeItem("simpleTasks");
    setTasks([]);
  };

  return (
    <div className="container">
      <h2>📝 Simple To-Do List (LocalStorage)</h2>
      <Link to="/simple"><button>Simple Todo</button></Link>
      <Link to="/local"><button>Category Todo (LocalStorage)</button></Link>
      <Link to="/api"><button>Category Todo (Axios API)</button></Link>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
        <button type="button" onClick={clearTasks}>Clear All</button>
      </form>

      <ul>
        {tasks.length ? tasks.map((t, i) => <li key={i}>{t}</li>) : <li>No tasks available</li>}
      </ul>
    </div>
  );
}

export default SimpleTodoLocal;
