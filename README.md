# Weather Dashboard Documentation

## 🌦️ Weather Dashboard
A modern, responsive React application for real-time weather tracking and 5-day forecasts. It integrates the OpenWeatherMap API to provide accurate weather data with a sleek user interface. The app features dark/light themes, search history tracking, and interactive animations for an enhanced user experience.

---

## 🚀 Features
- **🔍 Search current weather by city**: Get real-time weather updates for any city.
- **📆 5-day weather forecast**: View detailed forecasts for the next five days.
- **🌙 Dark/Light mode toggle**: Switch between themes for better visibility and aesthetics.
- **🧊 Frosted glass UI effects**: Modern design elements for a polished look.
- **🔄 Search history tracking**: Keep track of your recent searches.
- **📱 Responsive design**: Optimized for all devices, including desktops, tablets, and smartphones.

---

## 🛠️ Tech Stack
- **⚛️ React**: A JavaScript library for building user interfaces.
- **🌐 Axios**: For making HTTP requests to the OpenWeatherMap API.
- **🎨 CSS3**: Includes animations, gradients, and dark mode support.
- **📦 OpenWeatherMap API**: Provides real-time weather data and forecasts.

---

## 📂 Project Structure
```
weather-dashboard/
├── public/
├── src/
│   ├── components/       # Reusable React components
│   ├── styles/           # CSS files for styling
│   ├── App.js            # Main application file
│   └── index.js          # Entry point of the app
├── .env                  # Environment variables (API key)
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

---

## 🔑 Environment Variables
To use the OpenWeatherMap API, create a `.env` file in the root directory of the project and add your API key:

```
REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
```

You can obtain a free API key by signing up at [OpenWeatherMap](https://openweathermap.org/api).

---

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm start
   ```

   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## 🛠️ Scripts

The following scripts are available in the project:

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm test`: Runs tests using Jest (set up via Create React App).
- `npm run eject`: Ejects the configuration (not recommended unless necessary).

---

## 🧪 Testing

The project supports testing out of the box using Create React App. To write and run tests:

```bash
npm test
```

This will execute all test cases written for your components.

---

## 📄 API Integration Details

### OpenWeatherMap API:
The application integrates with the OpenWeatherMap API to fetch current weather data and 5-day forecasts.

- **Base URL**: `https://api.openweathermap.org/data/2.5/`
- **Endpoints Used**:
  - `/weather`: For current weather by city name.
  - `/forecast`: For 5-day forecasts.
- **Rate Limits**:
  - Free tier allows up to 60 requests per minute.
  - Ensure you handle errors gracefully if rate limits are exceeded.

For more details on API usage, refer to [OpenWeatherMap Documentation](https://openweathermap.org/api).

---

## 📷 Screenshots

*Coming soon – Add screenshots of your app to showcase its design!*

---

## 📄 License

This project is licensed under the MIT License. You are free to fork, modify, and use it for personal or commercial purposes.

---

Made with ❤️ using React & OpenWeather.
