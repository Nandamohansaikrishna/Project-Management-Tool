// src/components/SignIn.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy authentication logic (replace with real backend in production)
    if (email === "user@example.com" && password === "password123") {
      setIsAuthenticated(true);
      navigate("/dashboard");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light fade-in">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control hover-scale"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@example.com"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control hover-scale"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 hover-scale">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;