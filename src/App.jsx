// src/components/App.jsx
import React, { useState } from "react";


const App = ({ onLogin, onForgotPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating a successful login for demonstration
    if (email === "user@example.com" && password === "password123") {
      onLogin(true);  // On success, notify Main.jsx
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      <button className="forgot-password" onClick={onForgotPassword}>
        Forgot Password?
      </button>
    </div>
  );
};

export default App;
