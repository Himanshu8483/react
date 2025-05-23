import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ToDoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Handle input change
  function handleChange(e) {
    setTask(e.target.value);
  }

  // Add task to the list and localStorage
  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim()) {
      const updatedTasks = [...tasks, task];
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setTask(""); // Clear input
    }
  }

  // Clear all tasks
  function clearTasks() {
    localStorage.removeItem("tasks");
    setTasks([]);
  }

  return (
    <div>
        <Link to="/Form"><button>Make List</button></Link>
        <Link to="/TodoList"><button>Make List By Local Storage</button></Link>
        <Link to="/Test"><button>Make List By Axios</button></Link>
      <h1>Simple To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={handleChange}
        />
        <button type="submit">Add Task</button>
      </form>
      <button onClick={clearTasks}>Clear All</button>

      <table border="1">
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((t, i) => (
              <tr key={i}>
                <td>{t}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No tasks available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ToDoList;
