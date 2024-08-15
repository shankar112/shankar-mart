// src/pages/CheckoutPage.js
import React, { useState } from 'react';
import './CheckoutPage.css';

const CheckoutPage = ({ cart, calculateTotal, handleOrderCompletion }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderDetails = {
      name,
      email,
      address,
      total: calculateTotal(),
      items: cart,
    };
    handleOrderCompletion(orderDetails);
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-summary">
        <h3>Order Summary</h3>
        {cart.map((item) => (
          <div key={item.id} className="checkout-item">
            <p>{item.title} x {item.quantity}</p>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
        <h3>Total: ${calculateTotal()}</h3>
      </div>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h3>Billing Information</h3>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="checkout-button">Complete Purchase</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
