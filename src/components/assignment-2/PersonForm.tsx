"use client"
import React, { useState } from 'react';

const PersonForm = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [age, setAge] = useState<number | null>(null);

  return (
    <div>
      <div>
        <label>
          First Name:{' '}
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter first name"
          />
        </label>
      </div>
      <div>
        <label>
          Last Name:{' '}
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter last name"
          />
        </label>
      </div>
      <div>
        <label>
          Age:{' '}
          <input
            type="number"
            value={age||''}
            onChange={(e) => setAge(Number(e.target.value))}
            placeholder="Enter age"
          />
        </label>
      </div>

      <h3>Entered Information:</h3>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default PersonForm;
