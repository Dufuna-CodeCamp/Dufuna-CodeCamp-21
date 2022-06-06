import React from "react";
import { Link } from 'react-router-dom'

const Checkout = (props) => {
  return (
    <div className="checkOut">
      <Link to={props.next} className="link">
        <button className="checkout-button">
          <p>Checkout</p>
        </button>
      </Link>
    </div>
  );
};

export default Checkout;
