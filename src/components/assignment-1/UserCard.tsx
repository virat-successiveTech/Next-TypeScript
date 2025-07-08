import React, { JSX } from 'react';

interface UserCardProps {
  name: string;
  email: string;
  avatarURL: string;
}

function UserCard({ name, email, avatarURL }: UserCardProps): JSX.Element {
  return (
    <div className="user-card">
      <img src={avatarURL} alt={`${name}'s avatar`} className="user-avatar" />
      <div>
        <h2 className="user-name">{name}</h2>
        <p className="user-email">{email}</p>
      </div>
    </div>
  );
}

export default UserCard;
