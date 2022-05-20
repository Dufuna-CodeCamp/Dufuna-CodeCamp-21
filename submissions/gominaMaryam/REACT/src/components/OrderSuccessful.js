import React from 'react'
import "./orderSuccessful.css";
import Image from "../images/Success _Two Color 1.jpg";

const OrderSuccessful = () => {
  return (
    <div className="order-successful">
      <img src={Image} alt="successfull" />
      <h4>Order successful</h4>
      <p>
        We have started processing <br />
        your order.
      </p>
    </div>
  );
}

export default OrderSuccessful