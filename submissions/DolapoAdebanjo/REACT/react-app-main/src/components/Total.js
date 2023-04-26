import React from "react";

const Total = (props) => {
  const {totalPrice} = props;
  return (
    <div className="cart-total">
      <div className="total-box">Total</div>
      <div className="total-cost">{totalPrice}</div>
    </div>
  );
};

export default Total;
