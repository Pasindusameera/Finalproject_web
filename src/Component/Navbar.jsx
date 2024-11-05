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
      <div className="navbar-left">
        <Link to="/ArenaHome" className="app-name">
          Play Hub
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/ArenaHome">Home</Link>
        </li>
        <li>
          <Link to="/CreateArena">Create Arena</Link>
        </li>
        <li>
          <Link to="/Arena">Booking</Link>
        </li>
        <li>
          <Link to="/Staffmanage">Staff</Link>
        </li>
      </ul>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default NavBar;
