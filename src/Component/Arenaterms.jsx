import React from "react";
import { Link } from "react-router-dom";

const Arenaterms = () => {
  return (
    <div style={termsContainerStyle}>
      <h1>Terms of Service for Arena Owners</h1>
      <p>
        Welcome to Our Arena! This platform is designed exclusively for arena
        owners to manage their facilities, bookings, and administrative tasks.
        By accessing or using our platform, you agree to comply with and be
        bound by the following terms and conditions.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By creating an account and accessing this site, you agree to follow
        these terms and conditions. We may update these terms from time to time,
        and your continued use signifies acceptance of any changes.
      </p>

      <h2>2. Account Management</h2>
      <p>
        Arena owners are solely responsible for maintaining the confidentiality
        and security of their account credentials. All activity under your
        account is your responsibility, including updates to your arena listings
        and settings.
      </p>

      <h2>3. Arena Listings</h2>
      <p>
        You agree to provide accurate, complete, and current information about
        your arena, including availability, capacity, pricing, and other details.
        We reserve the right to review and, if necessary, remove listings that
        do not meet our standards or violate these terms.
      </p>

      <h2>4. Compliance with Regulations</h2>
      <p>
        Arena owners are responsible for ensuring their arenas comply with all
        applicable local laws and regulations, including safety and occupancy
        standards.
      </p>

      <h2>5. Limitation of Liability</h2>
      <p>
        Our Arena is not liable for any losses or damages arising from your use
        of the platform, including errors in arena listings, bookings, or other
        operational issues.
      </p>

      <p>If you have any questions, contact us at support@ourarena.com.</p>

      <Link to="/ArenaHome" className="back-button" style={backButtonStyle}>
        Back to Home
      </Link>
    </div>
  );
};

const termsContainerStyle = {
  backgroundColor: "#ffffff", // White background color
  padding: "20px",
  borderRadius: "10px", // Optional: Adds rounded corners
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Optional: Adds a subtle shadow
  maxWidth: "800px",
  margin: "20px auto", // Center align with margin
};

const backButtonStyle = {
  display: "inline-block",
  marginTop: "20px",
  padding: "10px 15px",
  backgroundColor: "#007bff",
  color: "white",
  borderRadius: "5px",
  textDecoration: "none",
  textAlign: "center",
  transition: "background-color 0.3s",
};

export default Arenaterms;
