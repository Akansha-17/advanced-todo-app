// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../Styles/Navbar.css";

// const Navbar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Logic to clear any user session or token
//     alert("Logged out successfully!");
//     navigate("/logout"); // Redirect to Logout page
//   };

//   return (
//     <div className="navbar-container">
//       {/* Left Section: To-Do List */}
//       <div className="todo-list">
//         <h2>To-Do List</h2>
//       </div>

//       {/* Right Section: Navbar */}
//       <nav className="navbar">
//         <ul className="nav-links">
//         <li>
//             <Link to="/">HOME</Link>
//           </li>
//           <li>
//             <Link to="/taskinput">Add Task</Link>
//           </li>
//           <li>
//             <Link to="/tasklist">View Task List</Link>
//           </li>
//           <li>
//             <button className="logout-button" onClick={handleLogout}>
//               Logout
//             </button>
//           </li>
//         </ul>
//       </nav>
//        {/* Footer */}
//        <footer className="footer">
//         <p>© 2025 QuadB Tech. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Navbar;


import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      {/* Left Section: To-Do List */}
      <div className="todo-list">
        <h2>To-Do List</h2>
      </div>

      {/* Right Section: Navbar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/taskinput">Add Task</Link>
          </li>
          <li>
            <Link to="/tasklist">View Task List</Link>
          </li>
          <li>
            <Link to="/logout" className="logout-button">
              Logout
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 QuadB Tech. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Navbar;
