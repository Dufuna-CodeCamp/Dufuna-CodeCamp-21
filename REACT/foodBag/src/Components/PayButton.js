import React from "react";

const PayButton = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="pay">
      <button className="pay-button">Pay</button>
    </div>
  );
};

export default PayButton;
