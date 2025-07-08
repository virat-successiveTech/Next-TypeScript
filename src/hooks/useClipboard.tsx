"use client"
import { useState, useCallback } from 'react';

export function useClipboard(text: string) {
  const [success, setSuccess] = useState<boolean | null>(null);

  const copyToClipboard = useCallback(() => {

    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed'; 
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();

    try {
      const result = document.execCommand('copy');
      setSuccess(result);
    } catch {
      setSuccess(false);
    }

    document.body.removeChild(textarea);
  }, [text]);

  return { success, copyToClipboard };
}
