'use client';

import React from 'react';
import { AuthProvider } from '@/context/AuthContext';
import { PreferencesProvider } from '@/context/PreferenceContext';
import UserPanel from '@/components/assignment-3/UserDashboard';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <PreferencesProvider>
        <UserPanel />
      </PreferencesProvider>
    </AuthProvider>
  );
};

export default App;
