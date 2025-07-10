"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

type AuthContextType = {
  isLoggedIn: boolean;
  username: string;
  login: (username: string) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const login = (name: string) => {
    setIsLoggedIn(true);
    setUsername(name);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, login }}>
      {children}
    </AuthContext.Provider>
  );
};
