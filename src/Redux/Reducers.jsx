// src/Redux/Reducers.js
const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [], // Load tasks from localStorage or default to an empty array
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      const updatedTasks = [...state.tasks, action.payload];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Save tasks to localStorage
      return { ...state, tasks: updatedTasks };
    }
    case 'DELETE_TASK': {
      const updatedTasks = state.tasks.filter((_, index) => index !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Save tasks to localStorage
      return { ...state, tasks: updatedTasks };
    }
    default:
      return state;
  }
};

export default taskReducer;
