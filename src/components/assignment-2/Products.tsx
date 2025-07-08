"use client"
import React from 'react';
import { useCart,Product } from '@/context/CartContext';
const PRODUCTS: Product[] = [
  { id: 1, name: 'Apple', price: 0.99 },
  { id: 2, name: 'Banana', price: 0.79 },
  { id: 3, name: 'Orange', price: 1.29 },
];

const Products: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {PRODUCTS.map(product => (
          <li key={product.id} style={{ marginBottom: '0.5rem' }}>
            {product.name} - ${product.price.toFixed(2)}{' '}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
