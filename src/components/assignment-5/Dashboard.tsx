// pages/dashboard.tsx
import React from 'react';
import { withAuth } from '@/hoc/withAuth';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, authenticated user!</p>
    </div>
  );
};

export default withAuth(Dashboard);
