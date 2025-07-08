"use client"
import React, { useState, useEffect } from 'react';

const Clock= () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <p>Current Time: {time.toLocaleTimeString()}</p>;
};

export default Clock;
