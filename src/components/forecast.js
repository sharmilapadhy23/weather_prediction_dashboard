import React, { useState } from 'react';
import { fetch5DayForecast } from '../api/weatherApi'; // Adjust the import path as necessary

const WeatherForecast = () => {
    // State variables
    const [city, setCity] = useState(''); // Holds the city input value
    const [forecast, setForecast] = useState(null); // Holds the forecast data
    const [error, setError] = useState(''); // Holds any error messages

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload on form submission
        try {
            const data = await fetch5DayForecast(city); // Fetch forecast data
            setForecast(data); // Update forecast state
            setError(''); // Clear any previous errors
        } catch (err) {
            setError('Could not fetch the forecast. Please try again.'); // Set error message
        }
    };

    return (
        <div className="weather-forecast-container">
            <h1>5-Day Weather Forecast</h1>

            {/* Form to input city name */}
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

            {/* Display error message if any */}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Display forecast data if available */}
            {forecast && (
                <div>
                    <h2>Forecast for {city}</h2>
                    <ul>
                        {forecast.list.map((item) => (
                            <li key={item.dt}>
                                {new Date(item.dt * 1000).toLocaleString()}: {/* Convert Unix timestamp to readable date */}
                                {item.weather[0].description} - {/* Weather description */}
                                {item.main.temp}°C {/* Temperature in Celsius */}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default WeatherForecast;
