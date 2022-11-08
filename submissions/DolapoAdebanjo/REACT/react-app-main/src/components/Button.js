import React from "react";

const Checkout = ({buttonName, disable, handleClick}) => {
  return (
      <button disabled={disable} onClick={handleClick}>{buttonName}</button>
  );
};

export default Checkout;
