import React, { useState } from "react";
import axios from "axios";
import "./CreateArena.css";
import NavBar from './Navbar';

const CreateArena = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    capacity: "",
    description: "",
    availability: "",
    image_url: "",
    pricing_model: "",
    price: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    try {
      const response = await axios.post(
        "http://localhost:5006/api/arena/create",
        formData
      );
      setSuccessMessage("Arena created successfully!");
      console.log("Arena created:", response.data);
      // Optionally reset the form
      setFormData({
        name: "",
        location: "",
        capacity: "",
        description: "",
        availability: "",
        image_url: "",
        pricing_model: "",
        price: "",
      });
    } catch (error) {
      setErrorMessage("Error creating arena. Please try again.");
      console.error("Error creating arena:", error);
    }
  };

  return (
    <div className="arena-page">
            <NavBar />
    <div className="form-container">
      <h2>Add Arena</h2>
      {successMessage && (
        <div className="message success">{successMessage}</div>
      )}
      {errorMessage && <div className="message error">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Capacity:</label>
          <input
            type="number"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Availability:</label>
          <input
            type="text"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="url"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Pricing Model:</label>
          <input
            type="text"
            name="pricing_model"
            value={formData.pricing_model}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">
          Add Arena
        </button>
      </form>
    </div>
    </div>
  );
};

export default CreateArena;
