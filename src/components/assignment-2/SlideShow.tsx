"use client"
import React, { useState, useEffect, useRef } from 'react';

const images = [
  '/assets/1.jpeg',
  '/assets/2.jpeg',
  '/assets/3.jpeg',
  '/assets/4.jpeg',
  '/assets/5.jpeg',
  '/assets/6.jpeg',
];

const Slideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [intervalMs, setIntervalMs] = useState<number>(3000);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(nextSlide, intervalMs);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, intervalMs]);

  const togglePlay = () => setIsPlaying((prev) => !prev);
  const handleIntervalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (!isNaN(val) && val >= 500) {
      setIntervalMs(val);
    }
  };

  return (
    <div>
      <div>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>

      <div>
        <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        <label>
          Interval (ms):{' '}
          <input
            type="number"
            min={500}
            step={100}
            value={intervalMs}
            onChange={handleIntervalChange}
          />
        </label>
      </div>

      <p>
        Slide {currentIndex + 1} / {images.length}
      </p>
    </div>
  );
};

export default Slideshow;
