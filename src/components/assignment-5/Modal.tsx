'use client';

import React, { ReactNode } from 'react';

interface ModalProps {
  open: boolean;
  setopen: (open: boolean) => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, setopen, children }) => {
  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          position: 'relative',
          minWidth: '300px',
          maxWidth: '90%',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        }}
      >
        <button
          onClick={() => setopen(false)}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            fontSize: '18px',
            cursor: 'pointer',
            color: 'gray',
          }}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;