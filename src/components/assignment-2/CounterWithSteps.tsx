"use client"
import React, { useState } from 'react';

const CounterWithStep: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [step, setStep] = useState<number>(1);


  const handleStepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (isNaN(value) || value <= 0) {
      setStep(1);
    } else {
      setStep(value);
    }
  };

  return (
    <div>
      <p>Count: {count}</p>

      <div>
        <button onClick={() => setCount(count - step)}>- Decrement</button>
        <button onClick={() => setCount(count + step)}>+ Increment</button>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <label>
          Step:{' '}
          <input
            type="number"
            value={step}
            min={1}
            onChange={handleStepChange}
            style={{ width: '60px' }}
          />
        </label>
      </div>
    </div>
  );
};

export default CounterWithStep;
