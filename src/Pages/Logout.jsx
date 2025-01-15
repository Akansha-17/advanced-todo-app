// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Logout = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Here, we can clear the user's session or authentication token.
//     // For example, if you're storing the user status in localStorage or sessionStorage, you can clear it.
//     localStorage.removeItem('user'); // or sessionStorage.removeItem('user');

//     // Optionally, show a logout message or trigger other actions.

//     // Redirect the user to the login page or any other page
//     navigate('/login'); // Change to your desired route
//   };

//   return (
//     <div className="logout-container">
//       <h2>Logout</h2>
//       <p>Are you sure you want to log out?</p>
      
//       <button onClick={handleLogout} className="logout-button">
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Logout;


import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Ask for confirmation before logging out
    if (window.confirm("Are you sure you want to log out?")) {
      // Clear the user's session or authentication token
      localStorage.removeItem("user"); // Modify based on your session management method

      // Redirect the user to the login page
      navigate("/login");
    }
  };

  return (
    <div className="logout-container">
      <h2>Logout</h2>
      <p>Are you sure you want to log out?</p>

      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default Logout;
