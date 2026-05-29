import { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Laptop',
      price: 50000
    },
    {
      id: 2,
      name: 'Phone',
      price: 20000
    },
    {
      id: 3,
      name: 'Headphones',
      price: 3000
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="container">
      <h1>E-Commerce Store</h1>

      <div className="products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <h2>{product.name}</h2>
            <p>₹{product.price}</p>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h2>Cart</h2>

        {cart.map((item, index) => (
          <p key={index}>
            {item.name} - ₹{item.price}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;