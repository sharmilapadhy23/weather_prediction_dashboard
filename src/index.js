import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/App.css'; // Ensure dark styles are defined here

function Root() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });


  
  // Sync theme preference with <html> and <body> on change
  useEffect(() => {
    const theme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', isDark);
    document.body.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        style={{
          position: 'fixed',
          top: '15px',
          right: '20px',
          padding: '10px 15px',
          borderRadius: '8px',
          backgroundColor: isDark ? '#80cbc4' : '#00796b',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          zIndex: 1000,
        }}
      >
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </button>
      <App isDark={isDark} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

console.log("App is running!");
