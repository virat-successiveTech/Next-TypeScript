'use client';

import { useState, ChangeEvent, MouseEvent } from 'react';

const SearchFilter: React.FC = () => {
  const items: string[] = [
    'Learn React Basics',
    'Build a To-Do App',
    'Understand useState & useEffect',
    'Work with Props and Components',
    'Handle Events in React',
    'Style Components with CSS',
    'Integrate an API',
    'Implement Routing with React Router',
    'Deploy the App',
  ];

  const [query, setQuery] = useState<string>('');
  const [filtered, setFiltered] = useState<string[]>([]);

  const search = (): void => {
    const result = items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(result);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  const handleMouseOver = (e: MouseEvent<HTMLButtonElement>): void => {
    e.currentTarget.style.backgroundColor = '#0059c1';
  };

  const handleMouseOut = (e: MouseEvent<HTMLButtonElement>): void => {
    e.currentTarget.style.backgroundColor = '#0070f3';
  };

  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '40px auto',
        padding: '30px',
        borderRadius: '12px',
        backgroundColor: '#f5f7fa',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#0070f3' }}>
        🔍 React Topics Search
      </h2>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for a topic..."
          style={{
            flexGrow: 1,
            padding: '10px',
            fontSize: '16px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            outline: 'none',
          }}
        />
        <button
          onClick={search}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{
            padding: '10px 16px',
            fontSize: '16px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          Search
        </button>
      </div>

      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {filtered.length === 0 ? (
          <li style={{ color: '#888', fontStyle: 'italic', textAlign: 'center' }}>
            No results found
          </li>
        ) : (
          filtered.map((item, index) => (
            <li
              key={index}
              style={{
                padding: '10px',
                marginBottom: '8px',
                backgroundColor: '#fff',
                borderRadius: '6px',
                border: '1px solid #e0e0e0',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.03)',
              }}
            >
              ✅ {item}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default SearchFilter;
