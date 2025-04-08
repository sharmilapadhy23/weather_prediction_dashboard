// src/App.js
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import RecentSearches from './components/RecentSearches';
import Forecast from './components/forecast'; // Import Forecast
import useWeather from './hooks/useWeather';
import './styles/App.css';



const App = ({ isDark }) => {
    const [city, setCity] = useState('');
    const [recentCities, setRecentCities] = useState([]);
    const { weatherData, forecastData, loading, error } = useWeather(city);
    
    useEffect(() => {
        setRecentCities((prevCities) => {
            // Avoid adding duplicates
            if (city && !prevCities.includes(city)) {
                return [...prevCities, city];
            }
            return prevCities;
        });
    }, [city]);
    
    const handleSearch = (city) => {
        setCity(city);
    };

    const handleRecentSearch = (city) => {
        setCity(city);
    };

    return (
        <div className={`app ${isDark ? 'dark' : ''}`}>
            <h1>Weather Dashboard</h1>
            <SearchBar onSearch={handleSearch} />
            <RecentSearches recentCities={recentCities} onRecentSearch={handleRecentSearch} />
            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}
            {weatherData && <WeatherCard weatherData={weatherData} />}
            {forecastData.length > 0 && <Forecast forecastData={forecastData} />} {/* Render Forecast */}
        </div>
    );
};

export default App;
