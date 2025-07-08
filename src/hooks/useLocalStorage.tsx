"use client"
import { useState } from 'react';

function useLocalStorage(key: string, initialValue: string) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ?? initialValue;
  });

  const setValue = (value: string) => {
    localStorage.setItem(key, value);
    setStoredValue(value);
  };

  const removeValue = () => {
    localStorage.removeItem(key);
    setStoredValue('');
  };

  return { storedValue, setValue, removeValue };
}

export default useLocalStorage;
