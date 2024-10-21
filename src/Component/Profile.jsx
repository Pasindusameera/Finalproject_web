import React, { useState } from 'react';
import axios from 'axios'; 
import "./Profile.css";
import NavBar from "./Navbar"; 

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    arenaName: 'One Arena',
    address: '123 Main St, Colombo',
    contact: '011-1111111',
    email: 'arena@gmail.com',
    description: 'You can do online booking',
    image: null,
    sports: [{ name: 'Football', time: '09:00 - 11:00', location: 'Field A' }],
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [newSport, setNewSport] = useState({ name: '', time: '', location: '' });

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfile({ ...profile, image: file });
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSportChange = (e) => {
    setNewSport({ ...newSport, [e.target.name]: e.target.value });
  };

  const addSport = () => {
    setProfile({
      ...profile,
      sports: [...profile.sports, newSport],
    });
    setNewSport({ name: '', time: '', location: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEditMode(false);

    // Prepare profile data to send
    const profileData = {
      arenaName: profile.arenaName,
      address: profile.address,
      contact: profile.contact,
      email: profile.email,
      description: profile.description,
      sports: profile.sports,
    };

    try {
      
      const response = await axios.post('http://localhost:5006/profile', profileData);
      console.log('Profile saved:', response.data);
    } catch (error) {
      console.error('Error saving profile', error);
    }
  };

  const removeSport = (index) => {
    setProfile({
      ...profile,
      sports: profile.sports.filter((_, i) => i !== index),
    });
  };

  return (
    <div>
    <NavBar /> 
    <div className="profile-container"> 
      
      <h2>Arena Profile</h2>
      {editMode ? (
        <form onSubmit={handleSubmit} className="profile-form">
          <label>
            Arena Name:
            <input
              type="text"
              name="arenaName"
              value={profile.arenaName}
              onChange={handleChange}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={profile.address}
              onChange={handleChange}
            />
          </label>
          <label>
            Contact:
            <input
              type="text"
              name="contact"
              value={profile.contact}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={profile.description}
              onChange={handleChange}
            />
          </label>
          <label>
            Upload Arena Image:
            <input type="file" onChange={handleImageChange} />
          </label>
          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Arena" />
            </div>
          )}

          {/* Add Sports Section */}
          <div className="sports-section">
            <h3>Sports Available</h3>
            {profile.sports.map((sport, index) => (
              <div key={index} className="sport-item">
                <p>
                  <strong>Sport:</strong> {sport.name}, <strong>Time:</strong> {sport.time}, <strong>Location:</strong> {sport.location}
                </p>
                <button type="button" onClick={() => removeSport(index)} className="remove-btn">
                  Remove
                </button>
              </div>
            ))}
            <div className="add-sport">
              <h4>Add New Sport</h4>
              <input
                type="text"
                name="name"
                value={newSport.name}
                placeholder="Sport Name"
                onChange={handleSportChange}
              />
              <input
                type="text"
                name="time"
                value={newSport.time}
                placeholder="Available Time (e.g., 09:00 - 11:00)"
                onChange={handleSportChange}
              />
              <input
                type="text"
                name="location"
                value={newSport.location}
                placeholder="Location"
                onChange={handleSportChange}
              />
              <button type="button" onClick={addSport} className="add-btn">
                Add Sport
              </button>
            </div>
          </div>

          <button type="submit" className="save-btn">Save</button>
        </form>
      ) : (
        <div className="profile-details">
          <p><strong>Name:</strong> {profile.arenaName}</p>
          <p><strong>Address:</strong> {profile.address}</p>
          <p><strong>Contact:</strong> {profile.contact}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          {profile.image && (
            <div className="image-preview">
              <img src={imagePreview} alt="Arena" />
            </div>
          )}
          <div className="sports-list">
            <h3>Sports Available</h3>
            {profile.sports.map((sport, index) => (
              <div key={index}>
                <p>
                  <strong>Sport:</strong> {sport.name}, <strong>Time:</strong> {sport.time}, <strong>Location:</strong> {sport.location}
                </p>
              </div>
            ))}
          </div>

          <button onClick={handleEditClick} className="edit-btn">Edit Profile</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Profile;
