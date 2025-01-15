import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/LogIn.css';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setCredentials({ email: "", password: "" });
    setError(""); 
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const storedCredentials = JSON.parse(localStorage.getItem("credentials"));

    if (storedCredentials) {
      if (
        credentials.email === storedCredentials.email &&
        credentials.password === storedCredentials.password
      ) {
        navigate("/HomePage"); 
      } else {
        setError("Invalid email or password");
      }
    } else {
      setError("No credentials found in localStorage. Please register first.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login Page</h2>
        <form onSubmit={handleLogin}>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={credentials.email} 
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              required
              className="input-field"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={credentials.password} 
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              required
              className="input-field"
            />
          </div>
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}

        {/* Register Link */}
        <p className="register-link">
          Don't have an account? <a href="/register" className="register-link-a">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
