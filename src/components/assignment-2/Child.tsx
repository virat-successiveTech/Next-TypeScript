import React from 'react';

interface ChildProps {
  count: number;
  increment: () => void;
  reset: () => void;
}

const Child: React.FC<ChildProps> = ({ count, increment, reset }) => {
  return (
    <div style={{ marginTop: '1rem' }}>
      <h3>Child Component</h3>
      <p>Count: {count}</p>
      <button onClick={increment} style={{ marginRight: '1rem' }}>
        Increment
      </button>
      <button onClick={reset}>Reset to Zero</button>
    </div>
  );
};

export default Child;
