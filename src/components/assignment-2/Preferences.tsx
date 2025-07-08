"use client"
import React, { useState } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';

const UserPreferences = () => {
  const { storedValue, setValue, removeValue } = useLocalStorage('username', '');
  const [input, setInput] = useState(storedValue);

  const saveName = () => {
    setValue(input);
  };

  return (
    <div>
      <h2>User Preferences</h2>
      <input
        type="text"
        value={input}
        placeholder="Enter your name"
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={saveName}>Save</button>
      <button onClick={removeValue}>Remove</button>

      <p>Stored Name: {storedValue || '(none)'}</p>
    </div>
  );
};

export default UserPreferences;
