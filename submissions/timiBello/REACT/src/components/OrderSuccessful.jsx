import React from 'react';
import img1 from '../FoodBag/Illustration_success.svg';

function OrderSuccessful() {
  return (
    <div className='order'>
      <img src={img1} alt='' />
      <h2>Order Successful</h2>
      <p>We have started proccessing your order.</p>
    </div>
  );
}

export default OrderSuccessful;
