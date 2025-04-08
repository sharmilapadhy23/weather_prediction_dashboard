// src/App.js
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import RecentSearches from './components/RecentSearches';
import Forecast from './components/forecast'; // Adjusted capitalization for consistency
import useWeather from './hooks/useWeather'; // Custom hook for fetching weather data
import './styles/App.css';

const App = ({ isDark }) => {
    // State management
    const [city, setCity] = useState(''); // Current city input
    const [recentCities, setRecentCities] = useState([]); // List of recent searches

    // Custom hook to fetch weather and forecast data
    const { weatherData, forecastData, loading, error } = useWeather(city);

    // Effect to update recent searches whenever the city changes
    useEffect(() => {
        setRecentCities((prevCities) => {
            if (city && !prevCities.includes(city)) {
                return [...prevCities, city];
            }
            return prevCities;
        });
    }, [city]);

    // Handle search input submission
    const handleSearch = (city) => {
        setCity(city);
    };

    // Handle selection of a recent search
    const handleRecentSearch = (city) => {
        setCity(city);
    };

    return (
        <div className={`app ${isDark ? 'dark' : ''}`}> {/* Apply dark mode class dynamically */}
            <h1>Weather Dashboard</h1>

            {/* Search Bar Component */}
            <SearchBar onSearch={handleSearch} />

            {/* Recent Searches Component */}
            <RecentSearches recentCities={recentCities} onRecentSearch={handleRecentSearch} />

            {/* Conditional Rendering */}
            {loading && <Loader />} {/* Show loader while fetching data */}
            {error && <ErrorMessage message={error} />} {/* Show error message if any */}
            {weatherData && <WeatherCard weatherData={weatherData} />} {/* Show current weather card */}
            {forecastData.length > 0 && <Forecast forecastData={forecastData} />} {/* Show 5-day forecast */}
        </div>
    );
};

export default App;
