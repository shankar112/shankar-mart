// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductListing from './pages/ProductListing';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  const [orderCompleted, setOrderCompleted] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleOrderCompletion = (orderDetails) => {
    console.log('Order Completed:', orderDetails);
    setCart([]);
    setOrderCompleted(true);
  };

  return (
    <Router>
      <div className="App">
        <nav id='navBar'>
          <div>Shankar Mart</div>
          <div id='navBar-CartArea'>            
          <Link to="/" className='navBar-CartArea-w'>Products</Link>
          <Link to="/cart" className='navBar-CartArea-w'>&#128722; ({cart.length})</Link>
          </div>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<ProductListing addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <>
                <CartPage
                  cart={cart}
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                />
                {cart.length > 0 && (
                  <Link to="/checkout">
                    <button className="checkout-button">Proceed to Checkout</button>
                  </Link>
                )}
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <CheckoutPage
                  cart={cart}
                  calculateTotal={calculateTotal}
                  handleOrderCompletion={handleOrderCompletion}
                />
                {orderCompleted && <p>Thank you for your purchase!</p>}
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
