import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"; // Ensure this path is correct

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
        // Store user ID in local storage
        localStorage.setItem("userId", loginResponse.data.userId); // Assuming userId is returned
        alert("Login successful");
        navigate(loginResponse.data.userType === "arena" ? "/ArenaHome" : "/ShopHome");
      } else {
        alert(loginResponse.data.message);
      }
    } catch (error) {
      alert(error.response?.data?.error || "An error occurred during login");
    }
  };

  return (
    <div className="Re_background-container">
      <div className="re_container">
        <div className="left-section">
          <h1>Welcome </h1>
          <p>Login to access your account</p>
        </div>
        <div className="right-section">
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
      </div>
    </div>
  );
}
