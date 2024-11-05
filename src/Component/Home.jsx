import React from 'react';
import NavBar from './Navbar';
import './Home.css'; // Import CSS for styling
import Weather from './WeatherBanner'; 

const ArenaPage = () => {
    return (
        <div className='arena-page'>
            <NavBar />
            <Weather/>
            

            <div className="staff-management-container">
                <div className="staff-info">
                    <h2>Add Arena</h2>
                    <p>convert your booking system.</p>
                    <h3>get start with us.</h3>
                    <a href="/CreateArena" className="staff-link">
                    Add arena
                    </a>
                </div>
                <div className="arena-image">
                    <img
                       src=".//src/assets/arena.png" // Update with the correct path to staff.jpg
                       alt="Staff Management"
                    />
                </div>
            </div>

            <div className="staff-management-container">
                <div className="staff-info">
                    <h2>Order Management</h2>
                    <p>Streamline your booking.Stay updated with all your booking in one place.</p>
                    <h3>Embrace efficiency with our new order management features.</h3>
                    <a href="/Arena" className="staff-link">
                          View Booking
                    </a>
                </div>
                <div className="staff-image">
                    <img
                       src=".//src/assets/order.jpg" // Update with the correct path to staff.jpg
                       alt="Staff Management"
                    />
                </div>
            </div>

            <div className="staff-management-container">
  <div className="staff-info">
    <h2>Staff Management</h2>
    <p>Efficiently manage your staff and their responsibilities.</p>
    <p>Stay updated with staff Details.</p>
    <h3>Join with new technology features.</h3>
    <a href="/Staffmanage" className="staff-link">
      View Staff Page
    </a>
  </div>
  <div className="staff-image">
    <img
      src=".//src/assets/staff.jpg" // Update with the correct path to staff.jpg
      alt="Staff Management"
    />
  </div>
</div>

            <div className="social-media-container">
  <h2>Handle Social Media</h2>
  <div className="social-media-box">
    <a
      href="https://www.facebook.com/yourpage"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
    >
      <i className="fab fa-facebook-f social-icon"></i>
    </a>
    <a
      href="https://twitter.com/yourhandle"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
    >
      <i className="fab fa-twitter social-icon"></i>
    </a>
    <a
      href="https://www.linkedin.com/in/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <i className="fab fa-linkedin-in social-icon"></i>
    </a>
    <a
      href="https://www.instagram.com/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <i className="fab fa-instagram social-icon"></i>
    </a>
  </div>
</div>

<footer className="footer">
  <p>
    © 2024 Our Arena | <a href="/Arenaterms" className="footer-link">Terms of Service</a> |{" "}
    <a href="/Arenaprivancr" className="footer-link">Privacy Policy</a>
  </p>
</footer>


        </div>
    );
};

export default ArenaPage;
