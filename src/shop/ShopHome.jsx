import React from 'react';
import NavBar from './ShopNavbar';
import './ShopHome.css'; // Import CSS for styling

const ArenaPage = () => {
    return (
        <div className='arena-page'>
            <NavBar />
            <div className="staff-management-container">
                <div className="staff-info">
                    <h2>manage stock</h2>
                    <p>manage your stock easy</p>
                    <h3>get start with us.</h3>
                    <a href="/CreateArena" className="staff-link">
                          View stock
                    </a>
                </div>
                <div className="staff-image">
                    <img
                       src=".//src/assets/staff.jpg" // Update with the correct path to staff.jpg
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
                          View orders
                    </a>
                </div>
                <div className="staff-image">
                    <img
                       src=".//src/assets/order.jpg" // Update with the correct path to staff.jpg
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




        </div>
    );
};

export default ArenaPage;
