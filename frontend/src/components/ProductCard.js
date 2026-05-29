import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>₹{product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;