import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/Actions";
import { toast, ToastContainer } from "react-toastify";
import "../Styles/TaskInput.css"; 
import Navbar from "../Components/Navbar";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [activity, setActivity] = useState("Indoor");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task) {
      dispatch(addTask({ task, priority, activity }));
      setTask("");
      toast.success("Task added successfully!");
    } else {
      toast.error("Task cannot be empty!");
    }
  };

  return (
    <>
      <Navbar/>
    <div className="task-input-container">
      <h1>Add Task</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
        className="task-input"
        />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="priority-dropdown"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <select
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        className="priority-dropdown"
        >
        <option value="Indoor">Indoor</option>
        <option value="Outdoor">Outdoor</option>
      </select>
      <button onClick={handleAddTask} className="add-task-button">
        Add Task
      </button>
      <ToastContainer />
    </div>
    </>
  );
};

export default TaskInput;
