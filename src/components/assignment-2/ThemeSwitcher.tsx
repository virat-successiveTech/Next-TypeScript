"use client"
import React, { useContext } from 'react';
import { ThemeContext , ThemeProvider} from '@/context/ThemeContext';

export const ThemedContent =() => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const lightStyles = {
    backgroundColor: '#ffffff',
    color: '#222222',
    minHeight: '100vh',
    padding: '20px',
  };

  const darkStyles = {
    backgroundColor: '#222222',
    color: '#ffffff',
    minHeight: '100vh',
    padding: '20px',
  };

  const styles = theme === 'light' ? lightStyles : darkStyles;

  return (
    <div style={styles}>
      <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Theme</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
      <p>This is an example of theme switching using useContext.</p>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <ThemedContent />
  </ThemeProvider>
);

export default App;
