"use client"
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const App = () => {
  const { language, setLanguage } = useLanguage();

  const content = {
    en: {
      greeting: 'Hello, welcome!',
      description: 'This is a language switcher app.',
    },
    es: {
      greeting: '¡Hola, bienvenido!',
      description: 'Esta es una aplicación para cambiar de idioma.',
    },
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>{content[language].greeting}</h1>
      <p>{content[language].description}</p>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => setLanguage('en')} disabled={language === 'en'}>
          English
        </button>
        <button onClick={() => setLanguage('es')} disabled={language === 'es'} style={{ marginLeft: '1rem' }}>
          Español
        </button>
      </div>
    </div>
  );
};

export default App;
