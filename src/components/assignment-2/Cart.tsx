"use client"
import React from 'react';
import { useCart } from '@/context/CartContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart, totalPrice } = useCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id} style={{ marginBottom: '0.5rem' }}>
              {item.name} - ${item.price.toFixed(2)} x {item.quantity}{' '}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
