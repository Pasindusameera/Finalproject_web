import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div style={privacyPolicyContainerStyle}>
      <h1>Privacy Policy for Arena Owners</h1>
      <p>
        This Privacy Policy outlines how Our Arena collects, uses, and protects
        information provided by arena owners using our platform.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We collect information from arena owners to create and manage accounts,
        including your name, contact details, arena location, and features.
        Additional data related to arena management activities may be collected
        to improve platform functionality.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>
        Information is used to support your arena management, facilitate
        bookings, enhance user experience, and provide technical support. This
        data helps us optimize the platform for arena owners and ensure reliable
        service.
      </p>

      <h2>3. Data Sharing</h2>
      <p>
        We do not share personal information with third parties unless it is
        essential for the service (e.g., backend providers) or as required by
        law. Arena information may be shared with booking-related services, but
        personal owner information remains protected.
      </p>

      <h2>4. Data Security</h2>
      <p>
        We prioritize security measures to safeguard your data but cannot
        guarantee absolute protection against all potential security threats.
      </p>

      <p>Contact us at <a href="mailto:privacy@ourarena.com">privacy@ourarena.com</a> for privacy inquiries.</p>

      <Link to="/ArenaHome" className="back-button" style={backButtonStyle}>
        Back to Home
      </Link>
    </div>
  );
};

// Style for the main container
const privacyPolicyContainerStyle = {
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  maxWidth: "800px",
  margin: "20px auto",
  lineHeight: "1.6",
  fontSize: "16px",
};

// Style for the back button
const backButtonStyle = {
  display: "inline-block",
  marginTop: "20px",
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "#ffffff",
  borderRadius: "5px",
  textDecoration: "none",
  textAlign: "center",
  transition: "background-color 0.3s ease",
};

export default PrivacyPolicy;
