import React from 'react';
import UserCard from '@/components/assignment-1/UserCard';

const App: React.FC = () => {
  return (
    <div>
      <h1>User List</h1>
      <UserCard
        name="Virat"
        email="virat@123.com"
        avatarURL="https://avatar.iran.liara.run/public/34"
      />
      <UserCard
        name="Adi"
        email="adi@123.com"
        avatarURL="https://avatar.iran.liara.run/public/11"
      />
    </div>
  );
};

export default App;
