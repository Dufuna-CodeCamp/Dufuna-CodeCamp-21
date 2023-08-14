import React from 'react';
import './vendor.css';

function Kfc({ food, handleAddToCart }) {
  return (
    <div className="kfc_stock_details">
      <img src={food.img} alt={food.name} />
      <div className="name_price">
        <h3>{food.name}</h3>
        <p>
          {food.price.toLocaleString('en-NG', {
            style: 'currency',
            currency: 'NGN',
          })}
        </p>
      </div>

      <button onClick={() => handleAddToCart(food)}>Add to Cart</button>
    </div>
  );
}

export default Kfc;
