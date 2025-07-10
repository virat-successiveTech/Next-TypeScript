"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const LoginPage: React.FC = () => {
  const router = useRouter();

  const handleLogin = () => {
    localStorage.setItem('token', 'fake-jwt-token');
    router.push('/pages/dashboard');
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
