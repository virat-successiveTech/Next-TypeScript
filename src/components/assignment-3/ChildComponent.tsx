"use client"
import React from 'react';
import { useAuth } from '@/context/AuthContext';

const ChildComponent: React.FC = () => {
  const { isLoggedIn, username, login } = useAuth();

  const handleLogin = () => {
    login('Virat Tripathi'); 
  };

  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome, {username}!</h2>
      ) : (
        <>
          <h2>Please log in.</h2>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default ChildComponent;
