import axios from 'axios';

// Constants
const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
export const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
export const BASE_FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';

// Error Handling Function
const handleApiError = (error) => {
    if (error.response) {
        // Server responded with a status outside the 2xx range
        console.error("API Response Error:", error.response.data);
        throw new Error(error.response.data.message || "Failed to fetch weather data");
    } else if (error.request) {
        // Request was made but no response received
        console.error("No response received:", error.request);
        throw new Error("No response from the weather server");
    } else {
        // Something went wrong in setting up the request
        console.error("Request Setup Error:", error.message);
        throw new Error("Weather request setup failed");
    }
};

// Fetch Current Weather Data
export const fetchWeather = async (city) => {
    if (!city || city.trim() === '') {
        throw new Error("City name is required");
    }

    try {
        const response = await axios.get(BASE_WEATHER_URL, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric', // Metric units for temperature in Celsius
            },
        });
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

// Fetch 5-Day Weather Forecast
export const fetch5DayForecast = async (city) => {
    if (!city || city.trim() === '') {
        throw new Error("City name is required");
    }

    try {
        const response = await axios.get(BASE_FORECAST_URL, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric', // Metric units for temperature in Celsius
            },
        });
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};
