import { useEffect, useState } from 'react';
import { fetchWeather, fetch5DayForecast } from '../api/weatherApi'; // ✅ Assuming these are correct

const useWeather = (city) => {
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        if (!city) return;

        const fetchWeatherData = async () => {
            setLoading(true);
            setError(null);

            try {
                // ✅ Use helper function to fetch current weather
                const currentWeather = await fetchWeather(city);
                setWeatherData(currentWeather);

                // ✅ Use helper function to fetch 5-day forecast
                const forecast = await fetch5DayForecast(city);
                setForecastData(forecast.list || []); // Defensive check

            } catch (err) {
                console.error('Weather Fetch Error:', err.message);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, [city]);

    return { weatherData, forecastData, loading, error };
};

export default useWeather;
