'use client';

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { usePreferences } from '@/context/PreferenceContext';

const UserPanel: React.FC = () => {
  const { isLoggedIn, username, login } = useAuth();
  const { theme, toggleTheme } = usePreferences();
  const [inputName, setInputName] = useState('');

  const handleLogin = () => {
    if (inputName.trim()) {
      login(inputName.trim());
      setInputName('');
    }
  };

  const styles = {
    container: {
      backgroundColor: theme === 'dark' ? '#1e1e1e' : '#f0f0f0',
      color: theme === 'dark' ? '#fff' : '#000',
      padding: '2rem',
      borderRadius: '8px',
      maxWidth: '400px',
      margin: '2rem auto',
      textAlign: 'center' as const,
      transition: 'all 0.3s ease',
    },
    input: {
      padding: '0.5rem',
      marginRight: '0.5rem',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: theme === 'dark' ? '#555' : '#ddd',
      color: theme === 'dark' ? '#fff' : '#000',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h2>User Panel</h2>

      {!isLoggedIn ? (
        <>
          <input
            type="text"
            placeholder="Enter username"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleLogin} style={styles.button}>Login</button>
        </>
      ) : (
        <p>Welcome, <strong>{username}</strong>!</p>
      )}

      <hr style={{ margin: '1.5rem 0' }} />

      <p>Current Theme: <strong>{theme}</strong></p>
      <button onClick={toggleTheme} style={styles.button}>Toggle Theme</button>
    </div>
  );
};

export default UserPanel;
