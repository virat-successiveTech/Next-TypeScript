"use client"
import React, { useState, useCallback } from 'react';
import Child from './Child';

const Parent = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial' }}>
      <h2>Parent Component</h2>
      <Child count={count} increment={increment} reset={reset} />
    </div>
  );
};

export default Parent;
