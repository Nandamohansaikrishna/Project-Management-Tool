// src/components/Dashboard.jsx
import React from "react";

const Dashboard = () => {
  return (
    <div className="container my-5 fade-in">
      <h1 className="text-center mb-5">Dashboard</h1>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-lg hover-scale">
            <div className="card-body">
              <h5 className="card-title">Team Members</h5>
              <p className="card-text">
                View and manage your team members.
              </p>
              <button className="btn btn-outline-primary">Details</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-lg hover-scale">
            <div className="card-body">
              <h5 className="card-title">Projects</h5>
              <p className="card-text">
                Track ongoing and completed projects.
              </p>
              <button className="btn btn-outline-primary">Details</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-lg hover-scale">
            <div className="card-body">
              <h5 className="card-title">Tasks</h5>
              <p className="card-text">
                Organize and prioritize your tasks.
              </p>
              <button className="btn btn-outline-primary">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;