import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faWater } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage for a saved theme on initial load
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light'; // Default to 'light' if none is saved
  });

  // Use an effect to apply the theme class to the body and save to localStorage
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]); // This effect runs whenever the 'theme' state changes

  const handleToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('ocean');
    } else {
      setTheme('light');
    }
  };

  return (
    <button onClick={handleToggle} className={`theme-toggle-btn ${theme}`}>
      <FontAwesomeIcon 
        icon={
          theme === 'light'
            ? faSun
            : theme === 'dark'
            ? faMoon
            : faWater
        }
      />
    </button>
  );
}