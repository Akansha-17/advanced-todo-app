import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import HomePage from './Pages/HomePage';
import TaskInput from './Pages/TaskInput';
import TaskList from './Pages/TaskList';
import LogIn from './Pages/LogIn';
import Register from './Pages/Register';
import Logout from "./Pages/Logout";

function App() {
  return (
    <>
      <div className="content">
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/taskinput" element={<TaskInput />} />
          <Route path="/tasklist" element={<TaskList />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </>
  );
}

export default App;


