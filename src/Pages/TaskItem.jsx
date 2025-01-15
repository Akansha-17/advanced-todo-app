// src/Pages/TaskItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTaskCompletion, deleteTask } from '../Redux/Actions'; // Import the new actions

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTaskCompletion(task.id)); // Dispatch toggle task completion
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id)); // Dispatch delete task
  };

  return (
    <div>
      <p>{task.text}</p>
      <button onClick={handleToggle}>
        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button onClick={handleDelete}>Delete Task</button>
    </div>
  );
};

export default TaskItem;
