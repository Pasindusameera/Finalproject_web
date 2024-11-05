// src/components/TopNavBar.jsx
/*
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser, FaHome, FaBars } from "react-icons/fa";
import "./ShopNavBar.css";

export default function ShopNavbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    navigate("/login"); // Navigate to the login page after logging out
  };

  return (
    <nav className="top-nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Equipment Shop
        </Link>
        
        <div className="nav-links">
          <Link to="/Shophome" className="nav-item">
            <FaHome /> Home
          </Link>
          <Link to="/ItemManager" className="nav-item">
            Stock
          </Link>
          <Link to="/ShowOrders" className="nav-item">
            Orders
          </Link>
        </div>

        <div className="nav-icons">
          <button className="nav-logout" onClick={handleLogout}>Logout</button>
          <button className="nav-toggle" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="nav-mobile">
          <Link to="/home" className="nav-item" onClick={toggleMenu}>
            <FaHome /> Home
          </Link>
          <Link to="/shop" className="nav-item" onClick={toggleMenu}>
            Shop
          </Link>
          <Link to="/categories" className="nav-item" onClick={toggleMenu}>
            Categories
          </Link>
          <Link to="/orders" className="nav-item" onClick={toggleMenu}>
            Orders
          </Link>
          <Link to="/profile" className="nav-item" onClick={toggleMenu}>
            <FaUser /> Profile
          </Link>
          <Link to="/cart" className="nav-item" onClick={toggleMenu}>
            <FaShoppingCart /> Cart
          </Link>
        </div>
      )}
    </nav>
  );
}*/
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ShopNavBar.css";

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
          <Link to="/Shophome">Home</Link>
        </li>
        <li>
          <Link to="/ItemManager">Stock</Link>
        </li>
        <li>
          <Link to="/ShowOrders">order</Link>
        </li>
        
      </ul>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default NavBar;

