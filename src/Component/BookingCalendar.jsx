/*import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import './BookingCalendar.css'; 
import NavBar from "./Navbar"; 

const BookingCalendar = () => {
  const today = new Date(); 
  const [selectedDate, setSelectedDate] = useState(today); 
  const [bookings, setBookings] = useState([]);

  
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`http://localhost:5006/bookings?date=${selectedDate.toISOString()}`);
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  
  const handleGoToToday = () => {
    setSelectedDate(today); 
  };

  return (
    <div>
    <NavBar /> 
    <div className="booking-calendar-container">
      <h2>Booking Calendar</h2>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
      />
      <div className="bookings-list">
        <h3>Bookings on {selectedDate.toDateString()}:</h3>
        {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <div key={index} className="booking-item">
              <p>Sport: {booking.sport}</p>
              <p>Time: {booking.time}</p>
              <p>Booked by: {booking.userName}</p>
            </div>
          ))
        ) : (
          <p>No bookings for this date.</p>
        )}
      </div>

      /}
      <button className="today-btn" onClick={handleGoToToday}>
        Go to Today
      </button>
    </div>
    </div>
  );
};

export default BookingCalendar;*/
