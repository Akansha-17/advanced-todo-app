// src/Pages/TaskList.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../Redux/Actions';
import '../Styles/TaskList.css';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks); // Access tasks from Redux state
  const dispatch = useDispatch();

  const priorityOrder = { High: 1, Medium: 2, Low: 3 }; // Define priority order

  // Sort tasks by priority
  const sortedTasks = [...tasks].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  const handleDelete = (taskIndex) => {
    dispatch(deleteTask(taskIndex)); // Dispatch delete action
  };

  return (
    <div className="task-list-container">
      <h1 className="task-list-header">Task List</h1>
      {sortedTasks.length > 0 ? (
        <table className="task-table">
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Task</th>
              <th>Priority</th>
              <th>Activity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedTasks.map((task, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{task.task}</td>
                <td>{task.priority}</td>
                <td>{task.activity}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-tasks">No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
