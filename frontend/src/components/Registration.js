import React, { useState } from "react";
import "./registration.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://backendaa.onrender.com/auth/register",
        {
          email,
          password,
        }
      );

      alert("Successfully Registered");
      navigate("/home");
    } catch (error) {
      alert("This user is already in the data base");
    }
  };

  return (
    <form onSubmit={handleRegistration} className="form">
      <div className="input-container">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div className="input-container">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <div className="input-container">
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
        />
      </div>
      <div className="button-container">
        <button type="submit">Register</button>
        <div className="register-link">
          Already have an account? <Link to="/">Sign in here</Link>
        </div>
      </div>
    </form>
  );
};

export default Registration;
