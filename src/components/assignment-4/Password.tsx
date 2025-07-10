'use client';

import { useState, MouseEvent } from 'react';

const Password: React.FC = () => {
  const [pass, setPass] = useState<string>('');
  const [rePass, setRePass] = useState<string>('');

  const checkSubmit = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    if (pass === rePass) {
      alert('Form Submitted');
    } else {
      alert("Passwords don't match");
    }
  };

  const handleMouseOver = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = '#005ac1';
  };

  const handleMouseOut = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = '#0070f3';
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        fontFamily: 'Segoe UI, sans-serif',
        backgroundColor: '#fefefe',
      }}
    >
      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPass(e.target.value)}
        style={{
          display: 'block',
          width: '100%',
          padding: '10px',
          marginBottom: '15px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />

      <input
        type="password"
        placeholder="Re-enter Password"
        onChange={(e) => setRePass(e.target.value)}
        style={{
          display: 'block',
          width: '100%',
          padding: '10px',
          marginBottom: '15px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />

      <button
        onClick={checkSubmit}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Password;
