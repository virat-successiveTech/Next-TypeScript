
import React from 'react';
import Products from '@/components/assignment-2/Products';
import Cart from '@/components/assignment-2/Cart';

const App = () => {
  return (
    <div style={{ display: 'flex', gap: '2rem', padding: '2rem', fontFamily: 'Arial' }}>
      <Products />
      <Cart />
    </div>
  );
};

export default App;
