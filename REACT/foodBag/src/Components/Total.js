import React from "react";

const Total = (props) => {
  return (
    <div className="total">
      <div>
        <p>Total</p>
      </div>
      <div>
        <p>#{props.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      </div>
    </div>
  );
};

export default Total;
