import React, { useState } from 'react';
import ProductListing from './pages/ProductListing';

function App() {
  const [cart, setCart] = useState([]);

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
    alert(`${product.title} added to cart!`);
  };
  

  return (
    <div className="App">
      <ProductListing addToCart={addToCart} />
    </div>
  );
}

export default App;
