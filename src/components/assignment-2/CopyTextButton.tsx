"use client"
import React from 'react';
import { useClipboard } from '@/hooks/useClipboard';

const CopyTextButton: React.FC = () => {
  const textToCopy = 'Hello, this is some text to copy!';
  const { success, copyToClipboard } = useClipboard(textToCopy);

  return (
    <div>
      <p>{textToCopy}</p>
      <button onClick={copyToClipboard}>Copy Text</button>
      {success === true && <p style={{ color: 'green' }}>Copied successfully!</p>}
      {success === false && <p style={{ color: 'red' }}>Failed to copy.</p>}
    </div>
  );
};

export default CopyTextButton;
