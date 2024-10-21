// src/components/StaffManagement.js
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
        state: '',
        position: '',
        wages: ''
    });
    const [currentId, setCurrentId] = useState(null); // Track the ID of the staff member being edited

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
        setNewStaff(member); // Populate form with the selected staff member's data
        setCurrentId(member._id); // Set the ID of the staff member being edited
        setIsEditing(true); // Switch to edit mode
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
            state: '',
            position: '',
            wages: ''
        });
        setCurrentId(null); // Reset the current ID
        setIsEditing(false); // Switch back to view mode
    };

    return (
        <div>
            <NavBar/>
            <h1>Staff Management</h1>
            <button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? 'View Mode' : 'Edit Mode'}
            </button>

            {isEditing && (
                <div>
                    <h2>{currentId ? 'Edit Staff Details' : 'Add Staff Details'}</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={newStaff.name}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={newStaff.age}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={newStaff.address}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={newStaff.state}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="position"
                        placeholder="Position"
                        value={newStaff.position}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="wages"
                        placeholder="Wages"
                        value={newStaff.wages}
                        onChange={handleChange}
                    />
                    <button onClick={currentId ? handleUpdateStaff : handleAddStaff}>
                        {currentId ? 'Update Staff' : 'Add Staff'}
                    </button>
                    <button onClick={resetForm}>Cancel</button>
                </div>
            )}

            <h2>Staff Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>State</th>
                        <th>Position</th>
                        <th>Wages</th>
                        {isEditing && <th>Actions</th>} {/* Only show actions column in edit mode */}
                    </tr>
                </thead>
                <tbody>
                    {staff.map((member) => (
                        <tr key={member._id}>
                            <td>{member.name}</td>
                            <td>{member.age}</td>
                            <td>{member.address}</td>
                            <td>{member.state}</td>
                            <td>{member.position}</td>
                            <td>{member.wages}</td>
                            {isEditing && (
                                <td>
                                    <button onClick={() => handleEditStaff(member)}>Edit</button>
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
