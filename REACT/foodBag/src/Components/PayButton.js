import React from "react";
import { Link } from "react-router-dom";

const PayButton = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="pay">
      <Link to={props.link} onClick={props.onPayButtonClick}>
        <button className="pay-button">
          Pay
        </button>
      </Link>
    </div>
  );
};

export default PayButton;

