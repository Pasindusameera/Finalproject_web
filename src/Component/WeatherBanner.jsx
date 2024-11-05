import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather?q=Colombo&appid=d67f9f4c378493f0968e6ff793c937ab&units=metric'
        );
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch weather data');
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  const getWeatherVideo = () => {
    // Your existing video logic
  };

  if (loading) return <p>Loading weather data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="weather-container">
      {getWeatherVideo()}

      <h2 className="weather-title">Current Weather in {weatherData.name}</h2>

      <div className="weather-cards">
        <div className="weather-card">
          <p className="weather-temp">
            <i className="fas fa-thermometer-half"></i> 
            Temperature: {weatherData.main.temp} °C
          </p>
          <p className="activity-suggestion">
            {weatherData.weather[0].main.toLowerCase().includes('rain')
              ? 'Today is good for indoor sports!'
              : 'Today is good for outdoor sports!'}
          </p>
        </div>

        <div className="weather-card">
          <p className="weather-item">
            <i className="fas fa-tint"></i> Humidity: {weatherData.main.humidity}%
          </p>
          <p className="weather-item">
            <i className="fas fa-wind"></i> Wind Speed: {weatherData.wind.speed} m/s
          </p>
          <p className="weather-item">
            <i className="fas fa-cloud"></i> {weatherData.weather[0].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
