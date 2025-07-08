import React, { JSX } from 'react';

interface WeatherProps {
  temperature: number;
}

function Weather ({ temperature }:WeatherProps) {
  let message = "The weather is moderate.";

  if (temperature > 25) {
    message = "It's sunny today!";
  } else if (temperature < 10) {
    message = "It's cold today!";
  }

  return (
    <div>
      <p>Temperature: {temperature}°C</p>
      <p>{message}</p>
    </div>
  );
};

export default Weather;
