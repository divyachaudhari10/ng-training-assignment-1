import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { getTasks, createTask, updateTask, deleteTask } from './services/TaskService';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    getTasks().then((res) => setTasks(res.data));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = (task) => {
    const exists = tasks.some(t => t.title.toLowerCase() === task.title.toLowerCase());
    if (exists) {
      alert("Task with this title already exists.");
      return;
    }
    createTask(task).then(fetchTasks);
  };

  const editTask = (id, updatedTask) => {
    updateTask(id, updatedTask).then(fetchTasks);
  };

  const removeTask = (id) => {
    deleteTask(id).then(fetchTasks);
  };

  return (
    <div className="app-container">
      <h1 className="header">My To-Do List</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onUpdate={editTask} onDelete={removeTask} />
    </div>
  );
}

export default App;
