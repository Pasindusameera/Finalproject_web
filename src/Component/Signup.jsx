import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "arena", // Default value for user type
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (value.password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    if (value.password !== value.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const registerResponse = await axios.post("http://localhost:5006/register", {
        name: value.name,
        email: value.email,
        password: value.password,
        userType: value.userType, // Send user type to the backend
      });
      console.log(registerResponse.data);
      setValue({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        userType: "arena", // Reset user type to default
      });
      alert("Account created successfully");
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.data.error) {
        alert(error.response.data.error);
      } else {
        alert("An error occurred during registration");
      }
    }
  };

  // Dynamically change the welcome message based on the user type
  const welcomeMessage = value.userType === "arena" ? "Welcome to the Arena" : "Welcome to the Shop";

  return (
    <div className="Re_background-container">
      <div className="re_container">
        <div className="left-section">
          <h1>{welcomeMessage}</h1> {/* Change text based on user type */}
          <p>Join us today and get started!</p>
        </div>
        <div className="right-section">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Name"
              onChange={handleChange}
              value={value.name}
              name="name"
              required
            />
            <input
              type="email"
              placeholder="Email"
              onChange={handleChange}
              value={value.email}
              name="email"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={value.password}
              onChange={handleChange}
              name="password"
              minLength="8"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={value.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
              minLength="8"
              required
            />
            {/* Radio buttons for user type selection */}
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="arena"
                  checked={value.userType === "arena"}
                  onChange={handleChange}
                  required
                />
                Arena
              </label>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="shop"
                  checked={value.userType === "shop"}
                  onChange={handleChange}
                />
                Shop
              </label>
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
