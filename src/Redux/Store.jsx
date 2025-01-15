// src/Redux/Store.jsx
import { configureStore } from '@reduxjs/toolkit'; // Correct import
import rootReducer from './Reducers'; // Your reducers file

const store = configureStore({
  reducer: rootReducer, // Set the root reducer here
});

export default store;
