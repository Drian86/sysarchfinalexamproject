// Home.js
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleDelete = async () => {
    const { id } = location.state;
    try {
      const response = await axios.delete(`http://localhost:8000/deleterecord/${id}`);
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.error("Error deleting record:", error);
    }
  };

  const handleUpdatePassword = async () => {
    const { id } = location.state;
    try {
      const response = await axios.put(`http://localhost:8000/updatepassword/${id}`, {
        password: newPassword,
      });
      alert(response.data);
      setNewPassword("");
    } catch (error) {
      console.error("Error updating password:", error);
      setErrorMessage("Error updating password. Please try again.");
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  const handleSeeDetails = (jobId) => {
    navigate(`/job-details/${jobId}`);
  };

  return (
    <div className="home-container">
      <div className="welcome-message">
        <h1>Welcome, {location.state.id}!</h1>
      </div>

      <div className="job-card">
        <h2>Software Developer</h2>
        <p>Lexmark</p>
        <p>Location: IT Park</p>
        <p>Job Description: Software Developer with many mastered programming language.</p>
        <button onClick={() => handleSeeDetails(1)}>See Details</button>
      </div>

      <div className="job-card">
        <h2>Marketing Manager</h2>
        <p>Tech Mahindra</p>
        <p>Location: IT Park</p>
        <p>Job Description: Gathers and analyzes information to identify new markets and customers, demand for products and services, and efficacy of existing marketing campaigns and strategies.</p>
        <button onClick={() => handleSeeDetails(2)}>See Details</button>
      </div>

      <div className="job-card">
        <h2>Graphic Designer</h2>
        <p>Dover</p>
        <p>Location: IT Park</p>
        <p>Job Description: Includes the entire process of defining requirements, visualizing and creating graphics including illustrations, logos, layouts and photos.</p>
        <button onClick={() => handleSeeDetails(3)}>See Details</button>
      </div>

      <div className="login-form password-update">
        <h2>Update Password</h2>
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button onClick={handleUpdatePassword}>Update Password</button>
        {errorMessage && <p>{errorMessage}</p>}
      </div>

      <div className="login-form account-delete">
        <h2>Delete Account</h2>
        <button onClick={handleDelete}>Delete Account</button>
      </div>

      <div className="logout-button">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Home;
