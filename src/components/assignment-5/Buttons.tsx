'use client';

import React, { CSSProperties, ReactNode, MouseEventHandler } from 'react';

type ButtonType = 'primary' | 'secondary' | 'danger';

interface ButtonProps {
  type?: ButtonType;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  style?: CSSProperties;
}

export default function Button({
  type = 'primary',
  onClick,
  children,
  style = {},
}: ButtonProps) {
  const getStyle = (type: ButtonType): CSSProperties => {
    switch (type) {
      case 'primary':
        return { backgroundColor: '#0070f3' };
      case 'secondary':
        return { backgroundColor: '#666' };
      case 'danger':
        return { backgroundColor: '#e00' };
      default:
        return { backgroundColor: '#0070f3' };
    }
  };

  const baseStyle: CSSProperties = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: 5,
    fontSize: 16,
    cursor: 'pointer',
    color: 'white',
    margin: '5px',
    ...getStyle(type),
    ...style,
  };

  return (
    <button style={baseStyle} onClick={onClick}>
      {children}
    </button>
  );
}
