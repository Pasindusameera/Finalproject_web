import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StaffManagement.css';
import NavBar from './Navbar';

const StaffManagement = () => {
    const [staff, setStaff] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [newStaff, setNewStaff] = useState({
        name: '',
        age: '',
        address: '',
        position: '',
        wages: '',
        maritalStatus: '' // Added marital status
    });
    const [currentId, setCurrentId] = useState(null);

    // Fetch staff data from backend
    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const response = await axios.get('http://localhost:5006/api/staff');
                setStaff(response.data);
            } catch (error) {
                console.error('Error fetching staff data:', error);
            }
        };

        fetchStaff();
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewStaff((prev) => ({ ...prev, [name]: value }));
    };

    // Add new staff member
    const handleAddStaff = async () => {
        try {
            const response = await axios.post('http://localhost:5006/api/staff', newStaff);
            setStaff((prev) => [...prev, response.data]);
            resetForm();
        } catch (error) {
            console.error('Error adding staff:', error);
        }
    };

    // Edit staff member
    const handleEditStaff = (member) => {
        setNewStaff(member);
        setCurrentId(member._id);
        setIsEditing(true);
    };

    // Update staff member
    const handleUpdateStaff = async () => {
        try {
            const response = await axios.put(`http://localhost:5006/api/staff/${currentId}`, newStaff);
            setStaff((prev) =>
                prev.map((member) => (member._id === currentId ? response.data : member))
            );
            resetForm();
        } catch (error) {
            console.error('Error updating staff:', error);
        }
    };

    // Reset form
    const resetForm = () => {
        setNewStaff({
            name: '',
            age: '',
            address: '',
            position: '',
            wages: '',
            maritalStatus: '' // Reset marital status
        });
        setCurrentId(null);
        setIsEditing(false);
    };

    return (
        <div className='staff'>
            <NavBar />
            <h1>Staff Management</h1>
            <button className="toggle-button" onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? 'View Mode' : 'Edit Mode'}
            </button>

            {isEditing && (
                <div className="form-container">
                    <h2>{currentId ? 'Edit Staff Details' : 'Add Staff Details'}</h2>
                    <input type="text" name="name" placeholder="Name" value={newStaff.name} onChange={handleChange} />
                    <input type="number" name="age" placeholder="Age" value={newStaff.age} onChange={handleChange} />
                    <input type="text" name="address" placeholder="Address" value={newStaff.address} onChange={handleChange} />
                    
                    {/* Position Dropdown */}
                    <select name="position" value={newStaff.position} onChange={handleChange} required>
                        <option value="">Select Position</option>
                        <option value="Security">Security</option>
                        <option value="Call Center Officer">Call Center Officer</option>
                        <option value="Cleaner">Cleaner</option>
                        <option value="Manager">Manager</option>
                        <option value="Organizer">Organizer</option>
                    </select>

                    {/* Marital Status Radio Buttons */}
                    <fieldset>
                        <legend>Marital Status</legend>
                        <label>
                            <input
                                type="radio"
                                name="maritalStatus"
                                value="Married"
                                checked={newStaff.maritalStatus === 'Married'}
                                onChange={handleChange}
                            />
                            Married
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="maritalStatus"
                                value="Unmarried"
                                checked={newStaff.maritalStatus === 'Unmarried'}
                                onChange={handleChange}
                            />
                            Unmarried
                        </label>
                    </fieldset>

                    <input type="number" name="wages" placeholder="Wages" value={newStaff.wages} onChange={handleChange} />
                    <div className="button-group">
                        <button className="submit-button" onClick={currentId ? handleUpdateStaff : handleAddStaff}>
                            {currentId ? 'Update Staff' : 'Add Staff'}
                        </button>
                        <button className="cancel-button" onClick={resetForm}>Cancel</button>
                    </div>
                </div>
            )}

            <h2>Staff Details</h2>
            <table className="staff-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Position</th>
                        <th>Wages</th>
                        <th>Marital Status</th> {/* Added column for marital status */}
                        {isEditing && <th>Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {staff.map((member) => (
                        <tr key={member._id}>
                            <td>{member.name}</td>
                            <td>{member.age}</td>
                            <td>{member.address}</td>
                            <td>{member.position}</td>
                            <td>{member.wages}</td>
                            <td>{member.maritalStatus}</td> {/* Added marital status */}
                            {isEditing && (
                                <td>
                                    <button className="edit-button" onClick={() => handleEditStaff(member)}>Edit</button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StaffManagement;
