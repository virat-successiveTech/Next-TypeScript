"use client"
import React from 'react';
import { AuthProvider } from '@/context/AuthContext';
import ChildComponent from './ChildComponent';

const Parent: React.FC = () => {
  return (
    <AuthProvider>
      <ChildComponent />
    </AuthProvider>
  );
};

export default Parent;
