import React, { useEffect, useState } from "react";
import "./Arena.css";
import NavBar from './Navbar';

const Arena = () => {
  const [bookings, setBookings] = useState([]);
  const [pendingBookings, setPendingBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [updatedStatus, setUpdatedStatus] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(
          "http://localhost:5006/api/arenaBookings/getBookings"
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setBookings([]);
      }
    };

    const fetchPendingBookings = async () => {
      try {
        const response = await fetch(
          "http://localhost:5006/api/arenaBookings/pendings"
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setPendingBookings(data);
      } catch (error) {
        console.error("Error fetching pending bookings:", error);
        setPendingBookings([]);
      }
    };

    fetchBookings();
    fetchPendingBookings();
  }, []);

  const handleOpenDialog = (booking) => {
    setSelectedBooking(booking);
    setUpdatedStatus(booking.status);
    setShowDialog(true);
  };

  const handleUpdateBooking = async () => {
    if (selectedBooking) {
      const response = await fetch(
        `http://localhost:5006/api/arenaBookings/bookings/update`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            bookingId: selectedBooking.bookingId,
            newStatus: updatedStatus,
          }),
        }
      );

      if (response.ok) {
        const updatedBooking = await response.json();
        setPendingBookings((prev) =>
          prev.map((b) =>
            b.bookingId === updatedBooking.bookingId ? updatedBooking : b
          )
        );

        setBookings((prev) =>
          prev.map((b) =>
            b.bookingId === updatedBooking.bookingId ? updatedBooking : b
          )
        );

        setShowDialog(false);
        setSelectedBooking(null);
      } else {
        const errorResponse = await response.json();
        console.error("Failed to update booking:", errorResponse.message);
      }
    }
  };

  return (
    <div className="bookingpage">
      <NavBar />
      <div className="bookings-container">
        <h1>Bookings Management</h1>
        <div className="tabs">
        </div>
        <div className="content">
          <h2>All Bookings</h2>
          <table>
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Arena ID</th>
                <th>Customer ID</th>
                <th>Customer Name</th> {/* New header for Customer Name */}
                <th>Status</th>
                <th>Start Time</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.bookingId}>
                  <td>{booking.bookingId}</td>
                  <td>{booking.arenaId}</td>
                  <td>{booking.customerId}</td>
                  <td>{booking.customerName}</td> {/* Display Customer Name */}
                  <td>{booking.status}</td>
                  <td>{booking.startTime}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Pending Bookings</h2>
          <table>
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Arena ID</th>
                <th>Customer ID</th>
                <th>Customer Name</th> {/* New header for Customer Name */}
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingBookings.map((booking) => (
                <tr key={booking.bookingId}>
                  <td>{booking.bookingId}</td>
                  <td>{booking.arenaId}</td>
                  <td>{booking.customerId}</td>
                  <td>{booking.customerName}</td> {/* Display Customer Name */}
                  <td>{booking.status}</td>
                  <td>
                    <button
                      className="btn update"
                      onClick={() => handleOpenDialog(booking)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showDialog && (
          <div className="dialog">
            <div className="dialog-content">
              <h3>Update Booking Status</h3>
              <label>Booking ID: {selectedBooking.bookingId}</label>
              <label>
                Status:
                <select
                  value={updatedStatus}
                  onChange={(e) => setUpdatedStatus(e.target.value)}
                >
                  <option value="pending">Pending</option>
                  <option value="canceled">Canceled</option>
                  <option value="confirmed">Confirmed</option>
                </select>
              </label>
              <button className="btn update" onClick={handleUpdateBooking}>
                Update
              </button>
              <button className="btn cancel" onClick={() => setShowDialog(false)}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Arena;
