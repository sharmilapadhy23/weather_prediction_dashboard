import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
export const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
export const BASE_FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';

const handleApiError = (error) => {
    if (error.response) {
        console.error("API Response Error:", error.response.data);
        throw new Error(error.response.data.message || "Failed to fetch weather data");
    } else if (error.request) {
        console.error("No response received:", error.request);
        throw new Error("No response from the weather server");
    } else {
        console.error("Error setting up request:", error.message);
        throw new Error("Weather request setup failed");
    }
};

export const fetchWeather = async (city) => {
    if (!city || city.trim() === '') {
        throw new Error("City name is required");
    }

    try {
        const response = await axios.get(BASE_WEATHER_URL, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric'
            }
        });
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};

export const fetch5DayForecast = async (city) => {
    if (!city || city.trim() === '') {
        throw new Error("City name is required");
    }

    try {
        const response = await axios.get(BASE_FORECAST_URL, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric'
            }
        });
        return response.data;
    } catch (error) {
        handleApiError(error);
    }
};
