// import React from 'react';
 import PropTypes from 'prop-types';
import { FaShoppingCart } from 'react-icons/fa'; // Importing the cart icon


const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className="flex justify-between items-center p-10 bg-black text-white">
      <h1 className="text-xl font-bold">Fake Store API</h1>
      <button onClick={openCart} className="relative flex items-center">
        <FaShoppingCart className="mr-2" /> {/* Adding the cart icon */}
        Cart ({cartCount})
      </button>
    </nav>
  );
};

// Define prop types
Navbar.propTypes = {
  cartCount: PropTypes.number.isRequired,
  openCart: PropTypes.func.isRequired,
};

export default Navbar;