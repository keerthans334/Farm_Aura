import React from 'react';
import '../styles/cards.css';

const WeatherForecast = () => (
  <div className="weather-forecast">
    <h3>5-Day Weather Forecast</h3>
    <div className="forecast-cards">
      {/* Example forecast cards */}
      <div className="forecast-card">
        <div className="forecast-temp">32°C</div>
        <div className="forecast-desc">Sunny</div>
        <div className="forecast-meta">65% | 12 km/h</div>
      </div>
      <div className="forecast-card">
        <div className="forecast-temp">29°C</div>
        <div className="forecast-desc">Cloudy</div>
        <div className="forecast-meta">70% | 8 km/h</div>
      </div>
      <div className="forecast-card">
        <div className="forecast-temp">27°C</div>
        <div className="forecast-desc">Rainy</div>
        <div className="forecast-meta">85% | 15 km/h</div>
      </div>
      <div className="forecast-card">
        <div className="forecast-temp">30°C</div>
        <div className="forecast-desc">Sunny</div>
        <div className="forecast-meta">60% | 10 km/h</div>
      </div>
      <div className="forecast-card">
        <div className="forecast-temp">31°C</div>
        <div className="forecast-desc">Cloudy</div>
        <div className="forecast-meta">68% | 9 km/h</div>
      </div>
    </div>
  </div>
);

export default WeatherForecast;
