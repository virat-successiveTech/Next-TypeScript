'use client';

import { useState, ChangeEvent } from 'react';

const TemperatureConverter: React.FC = () => {
  const [celsius, setCelsius] = useState<string>('');
  const [fahrenheit, setFahrenheit] = useState<string>('');

  const handleCelsiusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setCelsius(value);

    if (value === '' || isNaN(Number(value))) {
      setFahrenheit('');
    } else {
      const f = (parseFloat(value) * 9) / 5 + 32;
      setFahrenheit(f.toFixed(2));
    }
  };

  const handleFahrenheitChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setFahrenheit(value);

    if (value === '' || isNaN(Number(value))) {
      setCelsius('');
    } else {
      const c = ((parseFloat(value) - 32) * 5) / 9;
      setCelsius(c.toFixed(2));
    }
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '40px auto',
        padding: '30px',
        borderRadius: '12px',
        backgroundColor: '#f5f7fa',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '24px',
          color: '#0070f3',
        }}
      >
        🌡️ Temperature Converter
      </h2>

      <div style={{ marginBottom: '20px' }}>
        <label
          htmlFor="celsius"
          style={{
            display: 'block',
            marginBottom: '6px',
            fontWeight: 'bold',
            color: '#333',
          }}
        >
          Celsius (°C)
        </label>
        <input
          id="celsius"
          type="text"
          value={celsius}
          onChange={handleCelsiusChange}
          placeholder="Enter °C"
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            outline: 'none',
          }}
        />
      </div>

      <div>
        <label
          htmlFor="fahrenheit"
          style={{
            display: 'block',
            marginBottom: '6px',
            fontWeight: 'bold',
            color: '#333',
          }}
        >
          Fahrenheit (°F)
        </label>
        <input
          id="fahrenheit"
          type="text"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          placeholder="Enter °F"
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            outline: 'none',
          }}
        />
      </div>
    </div>
  );
};

export default TemperatureConverter;
