import React from 'react';

type ButtonProps = {
  text: string;
  color: string;
}

export default function Button({ text, color }: ButtonProps) {
  return (
    <button style={{ backgroundColor: color, color: 'white', padding: '10px 16px', border: 'none', borderRadius: '4px' }}>
      {text}
    </button>
  );
}
