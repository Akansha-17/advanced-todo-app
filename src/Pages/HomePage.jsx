import React from "react";
import "../Styles/HomePage.css";
import centralImage from "../assests/home-image.jpeg";
import '../Styles/Navbar.css';
import Navbar from "../Components/Navbar";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* <Navbar/> */}

      <div className="content">
        <img
          src={centralImage}
          alt="Central Display"
          className="central-image"
        />
        <div className="quote-section">
          <h2>Task Management Quotes</h2>
          <p>
            <span className="highlight">"Plan ahead,</span> execute efficiently, and always adapt to changes."
          </p>
          <p>
            "The key to success in task management is <span className="highlight">focus</span>, <span className="highlight">clarity</span>, and <span className="highlight">prioritization</span>."
          </p>
          <p>
            "Great things are achieved when <span className="highlight">small tasks</span> are handled with diligence."
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
