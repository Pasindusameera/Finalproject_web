import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
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

    // Custom password length validation
    if (value.password.length < 8) {
      alert("Password must be at least 8 characters long");
      return; // Prevent form submission if password is too short
    }

    try {
      const registerResponse = await axios.post("http://localhost:5006/register", value);
      console.log(registerResponse.data);
      setValue({
        name: "",
        email: "",
        password: "",
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

  return (
    <div className="container">
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
          minLength="8" /* HTML validation */
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}
