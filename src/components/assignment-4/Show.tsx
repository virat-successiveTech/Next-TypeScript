'use client';

import { useState, ChangeEvent, MouseEvent } from 'react';

const Show: React.FC = () => {
  const [value, setValue] = useState<string>(' ');
  const [state, setState] = useState<string>(' ');

  const showMessage = (): void => {
    setValue(state);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setState(e.target.value);
  };

  const handleMouseOver = (e: MouseEvent<HTMLButtonElement>): void => {
    e.currentTarget.style.backgroundColor = '#005ac1';
  };

  const handleMouseOut = (e: MouseEvent<HTMLButtonElement>): void => {
    e.currentTarget.style.backgroundColor = '#0070f3';
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        fontFamily: 'Segoe UI, sans-serif',
        backgroundColor: '#fdfdfd',
      }}
    >
      <input
        placeholder="Enter the message to be displayed"
        onChange={handleInputChange}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '15px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />

      <div>
        <button
          onClick={showMessage}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginBottom: '20px',
          }}
        >
          SHOW
        </button>

        <div
          style={{
            marginTop: '10px',
            fontSize: '18px',
            color: '#333',
          }}
        >
          The updated value: <strong>{value}</strong>
        </div>
      </div>
    </div>
  );
};

export default Show;
