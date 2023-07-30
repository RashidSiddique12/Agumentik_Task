import React, { useState } from "react";
import "./signIn.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    // Handle sign-in logic here

    try {
      const response = await axios.post(
        "https://backendaa.onrender.com/auth/login",
        {
          email,
          password,
        }
      );

      const token = response.data.token;

      localStorage.setItem("token", token);

      alert("Login successfully");
      navigate("/home");
    } catch (error) {
      alert(" User Not match with the data");
    }
  };

  return (
    <form onSubmit={handleSignIn} className="form">
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
      <div className="button-container">
        <button type="submit">Sign In</button>
        <div className="signin-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </div>
      </div>
    </form>
  );
};

export default SignIn;
