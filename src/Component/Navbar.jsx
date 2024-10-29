import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
        <li>
          <Link to="/BookingCalendar">Calendar</Link>
        </li>
        <li>
          <Link to="/BookingSlots">BookingSlots</Link>
        </li>
        <li>
          <Link to="/CreateArena">Create Arena</Link>
        </li>
        <li>
          <Link to="/Staffmanage">staff</Link>
        </li>
      </ul>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default NavBar;
