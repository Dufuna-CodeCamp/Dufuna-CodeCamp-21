import React from "react";
import scooter from "../images/scooter 1.svg";

const Fourth = (props) => {
  return (
    <div>
      <div className="fourth-row">
        <div>
          <img className="delivery" src={scooter} />
        </div>
        <div className="beside1">
          <div>
            <p>Delivery Fee</p>
          </div>
        </div>
        <div className="price2">
          <p>#{props.price4.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Fourth;
