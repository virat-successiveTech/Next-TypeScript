"use client"
import React, { useState } from 'react';

const GenerateRandomNumber= () => {

  const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
  const [randomNumber, setRandomNumber] = useState<number>(getRandomNumber());

  const generateNewNumber = () => {
    setRandomNumber(getRandomNumber());
  };

  return (
    <div>
      <h2>Random Number Generator</h2>
      <p>Current Number: {randomNumber}</p>
      <button onClick={generateNewNumber}>Generate New Number</button>
    </div>
  );
};

export default GenerateRandomNumber;
