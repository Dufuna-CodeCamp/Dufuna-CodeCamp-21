import React from "react";
import { Link } from 'react-router-dom'

const Checkout = () => {
  return (
    <div className="checkOut">
      <Link to="verify" className="link">
        <button className="checkout-button">
          <p>Checkout</p>
        </button>
      </Link>
    </div>
  );
};

export default Checkout;
