// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/signin";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={<SignIn setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? (
                <Dashboard />
              ) : (
                <SignIn setIsAuthenticated={setIsAuthenticated} />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;