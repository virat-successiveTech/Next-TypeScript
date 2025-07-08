"use client"
import { useState, useRef, useEffect, useCallback } from 'react';

function useTimer(initialSeconds: number) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = useCallback(() => {
    if (intervalRef.current !== null) return; 

    intervalRef.current = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  const pause = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const reset = useCallback(() => {
    pause();
    setSecondsLeft(initialSeconds);
  }, [initialSeconds, pause]);
  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
    };
  }, []);

  return { secondsLeft, start, pause, reset };
}

export default useTimer;
