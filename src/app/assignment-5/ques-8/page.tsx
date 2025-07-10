'use client';

import React from 'react';
import Button from '@/components/assignment-5/Buttons';

export default function HomePage() {
  const handleClick = (msg: string) => {
    alert(`You clicked the ${msg} button`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2 style={{ marginBottom: '20px' }}>Reusable Button Demo</h2>

      <Button type="primary" onClick={() => handleClick('Primary')}>
        Primary
      </Button>

      <Button type="secondary" onClick={() => handleClick('Secondary')}>
        Secondary
      </Button>

      <Button type="danger" onClick={() => handleClick('Danger')}>
        Danger
      </Button>
    </div>
  );
}
