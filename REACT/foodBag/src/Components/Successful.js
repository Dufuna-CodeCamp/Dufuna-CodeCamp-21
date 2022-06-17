import React from "react";
import yes from "../images/Illustration_success.svg";

function Successful() {
  return (
    <div className="successful">
      <img src={yes} alt="Man running joyfully" />
      <div className="green">
        <p>Order successful</p>
      </div>
      <div className="processing">
        <p>We have started processing your order.</p>
      </div>
    </div>
  );
}

export default Successful;
