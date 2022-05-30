import React from "react";
import close from "../images/close.svg";
import kingBucket from "../images/image4.svg";
import plus from "../images/plus.svg";
import minus from "../images/Minus.svg";

const First = (props) => {
  return (
    <div>
      <div className="first-row">
        <div className="close">
          <input type="image" src={close} />
        </div>
          <img className="king-bucket" src={kingBucket} />
        <div className="beside">
          <div>
            <p>KFC-King Bucket</p>
          </div>
          <div className="buttons">
            <input onClick={props.onPlusButtonClick} type="image" src={plus} />
            <div className="value">
              <p>{props.value1}</p>
            </div>
            <input onClick={props.onMinusButtonClick} type="image" src={minus} />
          </div>
        </div>
        <div className="price">
          <p>#{props.price1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default First;
