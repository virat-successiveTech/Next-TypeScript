'use client';

import { useState, ChangeEvent } from 'react';

const Control: React.FC = () => {
  const [state, setState] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f4f8',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        padding: '20px',
      }}
    >
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Type something..."
        style={{
          padding: '12px 16px',
          width: '300px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '16px',
          marginBottom: '20px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      />

      <div
        style={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '20px', color: '#333' }}>
          The state has been updated to:{' '}
          <b style={{ color: '#0070f3' }}>{state}</b>
        </h1>
      </div>
    </div>
  );
};

export default Control;
