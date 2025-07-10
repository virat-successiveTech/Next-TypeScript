'use client';

import React, { useState, ChangeEvent } from 'react';

const DropDown: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSelectedValue(event.target.value);
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '40px auto',
        padding: '30px',
        borderRadius: '12px',
        backgroundColor: '#f5f7fa',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <label
        htmlFor="my-select"
        style={{
          display: 'block',
          marginBottom: '10px',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#333',
        }}
      >
        Choose an option:
      </label>

      <select
        id="my-select"
        value={selectedValue}
        onChange={handleChange}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          outline: 'none',
          marginBottom: '20px',
        }}
      >
        <option value="">--Please choose an option--</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      <p style={{ fontSize: '16px', color: '#0070f3' }}>
        You selected: <strong>{selectedValue || 'None'}</strong>
      </p>
    </div>
  );
};

export default DropDown;
