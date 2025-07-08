"use client"
import React from 'react';
import useTimer from '@/hooks/useTimer';

const CountdownTimer: React.FC = () => {
  const { secondsLeft, start, pause, reset } = useTimer(60); 

  const formatTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h2>Countdown Timer</h2>
      <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{formatTime(secondsLeft)}</div>
      <button onClick={start} style={{ marginRight: '0.5rem' }}>
        Start
      </button>
      <button onClick={pause} style={{ marginRight: '0.5rem' }}>
        Pause
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CountdownTimer;
