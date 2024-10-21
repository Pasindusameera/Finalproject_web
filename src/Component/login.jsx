import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [value, setValue] = useState({
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
    try {
      const loginResponse = await axios.post("http://localhost:5006/login", value);
      console.log(loginResponse.data);

      if (loginResponse.data.success) {
        alert("Login successful");
        navigate("/Home"); 
      } else {
        alert(loginResponse.data.message); 
      }
    } catch (error) {
      if (error.response && error.response.data.error) {
        alert(error.response.data.error); 
      } else {
        alert("An error occurred during login"); 
      }
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>
    </div>
  );
}
