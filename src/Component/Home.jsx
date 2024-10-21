import React from 'react';
import NavBar from './Navbar';
import WeatherBanner from './WeatherBanner';

const Home = () => {
    return (
        <div>
            <NavBar />
            <WeatherBanner /> {/* Add the WeatherBanner here */}
            {/* Other components or content can go here */}
        </div>
    );
};

export default Home;
