import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div>
      <p>{item.name} - ₹{item.price}</p>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;