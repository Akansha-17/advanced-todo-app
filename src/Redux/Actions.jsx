// src/Redux/Actions.jsx

// Action to add a task
export const addTask = (task) => {
  return {
    type: 'ADD_TASK',
    payload: task,
  };
};

// Action to toggle task completion
export const toggleTaskCompletion = (taskId) => {
  return {
    type: 'TOGGLE_TASK_COMPLETION',
    payload: taskId,
  };
};

// Action to delete a task
export const deleteTask = (taskId) => {
  return {
    type: 'DELETE_TASK',
    payload: taskId,
  };
};
