/*import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'; 
import './BookingSlots.css';
import NavBar from './Navbar';

const BookingSlots = () => {
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const [timeSlots, setTimeSlots] = useState({
        Mon: [],
        Tue: [],
        Wed: [],
        Thu: [],
        Fri: [],
        Sat: [],
        Sun: []
    });
    const [selectedDay, setSelectedDay] = useState('Mon');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    
    useEffect(() => {
        const today = new Date();
        const dayIndex = today.getDay(); 
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        setSelectedDay(days[dayIndex]);
    }, []);

    const addSlot = async () => {
        if (startTime && endTime) {
            const slot = `${startTime} - ${endTime}`;
            console.log("Adding slot:", slot);
            
            
            setTimeSlots((prevSlots) => ({
                ...prevSlots,
                [selectedDay]: [...prevSlots[selectedDay], slot]
            }));

            
            const bookingData = {
                date: new Date(), 
                sport: selectedDay, 
                time: slot,
                userName: "Your Name" 
            };

            
            try {
                await axios.post('http://localhost:5006/bookings', bookingData);
                console.log("Slot saved successfully!");
            } catch (error) {
                console.error("Error saving slot to database:", error);
            }

            
            setStartTime('');
            setEndTime('');
        } else {
            console.log("Start or end time is missing");
        }
    };

    const removeSlot = (day, slot) => {
        setTimeSlots((prevSlots) => ({
            ...prevSlots,
            [day]: prevSlots[day].filter((s) => s !== slot)
        }));
    };

    return (
        <div>
            <NavBar/>
        <div className="booking-slots">
            <h2>Booking Time Slots</h2>

            <div className="day-selector">
                <label>Select Day:</label>
                <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
                    {daysOfWeek.map((day) => (
                        <option key={day} value={day}>{day}</option>
                    ))}
                </select>
            </div>

            <div className="new-slot-input">
                <label>Start Time:</label>
                <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    required
                />

                <label>End Time:</label>
                <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    required
                />

                <button onClick={addSlot}>Add Slot</button>
            </div>

            <div className="slots-grid">
                {daysOfWeek.map((day) => (
                    <div key={day} className="day-column">
                        <h3>{day}</h3>
                        <div className="slots">
                            {timeSlots[day].length > 0 ? (
                                timeSlots[day].map((slot, index) => (
                                    <div className="slot-item" key={index}>
                                        <span>{slot}</span>
                                        <FontAwesomeIcon
                                            icon={faTrash}
                                            className="remove-icon"
                                            onClick={() => removeSlot(day, slot)}
                                        />
                                    </div>
                                ))
                            ) : (
                                <span>No slots available</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default BookingSlots;*/
