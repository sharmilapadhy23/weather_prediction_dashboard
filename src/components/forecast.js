import React, { useState } from 'react';
import { fetch5DayForecast } from '../api/weatherApi'; // Adjust the import path as necessary

const WeatherForecast = () => {
    const [city, setCity] = useState('');
    const [forecast, setForecast] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {  
        e.preventDefault();
        try {
            const data = await fetch5DayForecast(city);
            setForecast(data);
            setError('');
        } catch (err) {
            setError('Could not fetch the forecast. Please try again.');
        }
    };

    return (
        <div className="weather-forecast-container">
            <h1>5-Day Weather Forecast</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city"
                    required
                />
                <button type="submit">Get Forecast</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {forecast && (
                <div>
                    <h2>Forecast for {city}</h2>
                    <ul>
                        {forecast.list.map((item) => (
                            <li key={item.dt}>
                                {new Date(item.dt * 1000).toLocaleString()}: {item.weather[0].description} - {item.main.temp}°C
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default WeatherForecast;