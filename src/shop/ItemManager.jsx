import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ShopNavBar from '../shop/ShopNavbar';
import "./ItemManager.css";

const ItemManager = () => {
  const [items, setItems] = useState([]);

  // Fetch items from the backend
  const fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:5006/api/items/all");
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="item-manager-container">
      <ShopNavBar />
      <h2>Item Manager</h2>
      <Link to="/AddItemPage">
        <button>Add New Item</button>
      </Link>

      {/* Display Item List */}
      <ul className="item-list">
        {items.map((item) => (
          <li key={item._id} className="item">
            <h4>{item.name}</h4>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Description: {item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemManager;
