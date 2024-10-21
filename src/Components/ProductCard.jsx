// import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border rounded-md shadow-md p-4">
      <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p>${product.price}</p>
      <button
        onClick={() => addToCart(product)} 
        className="mt-5 bg-black  text-white p-2 rounded-md"
      >
        Add to Cart
      </button>
    </div>
  );
};

// Define prop types
ProductCard.propTypes = {

  product: PropTypes.shape({

    id: PropTypes.number.isRequired,

    title: PropTypes.string.isRequired,

    price: PropTypes.number.isRequired,

    image: PropTypes.string.isRequired,
  }).isRequired,

  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;