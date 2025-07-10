"use client"
import React, { useState } from 'react';
import { withLogger } from '@/hoc/withLogger';

const HomePage: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Home Page</h1>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default withLogger(HomePage);
