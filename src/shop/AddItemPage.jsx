import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddItemPage = () => {
  const [item, setItem] = useState({ name: "", price: 0, quantity: 0, description: "" });
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5006/api/items/add", item);
      navigate("/ItemManager"); // Redirect to Item list page after adding
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={item.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={item.price}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={item.quantity}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={item.description}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItemPage;
