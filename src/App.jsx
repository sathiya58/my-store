

import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import ProductCard from './Components/ProductCard';
import CartModal from './components/CartModal';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch products from Fake Store API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Add product to cart
  const addToCart = (product) => {
    if (cartItems.find((item) => item.id === product.id)) {
      alert('Item already added to the cart');
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Open and close modal
  const openCart = () => setIsModalOpen(true);
  const closeCart = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar cartCount={cartItems.length} openCart={openCart} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      {isModalOpen && (
        <CartModal 
          cartItems={cartItems} 
          closeModal={closeCart} 
          removeFromCart={removeFromCart} 
        />
      )}
    </div>
  );
};

export default App;
