
import React from 'react';
import './TaskList.css';

function TaskList({ tasks, onUpdate, onDelete }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onUpdate(task.id, { ...task, completed: !task.completed })}
          />
          <span className={task.completed ? 'completed' : ''}>{task.title}</span>
          <button onClick={() => onDelete(task.id)} className="delete-btn">Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
