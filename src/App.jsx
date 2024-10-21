import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Component/Signup";
import Login from "./Component/login"; 
import Home from "./Component/Home"; 
import Profile from "./Component/Profile";
import BookingCalendar from "./Component/BookingCalendar"
import BookingSlots from "./Component/BookingSlots";
import WeatherBanner from "./Component/WeatherBanner";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Staffmanage from "./Component/Staffmanage";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/home" element={<Home />} /> {/* Add Home route */}
          <Route path="Profile" element={<Profile/>}/>
          <Route path="BookingCalendar" element={<BookingCalendar/>}/>
          <Route path="BookingSlots" element={<BookingSlots/>}/>
          <Route path="WeatherBanner" element={<WeatherBanner/>}/>
          <Route path="Staffmanage" element={<Staffmanage/>}/>
          
          {}
          <Route path="/" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}
