import React from "react";
import close from "../images/close.svg";
import rmax1 from "../images/image3.svg";
import plus from "../images/plus.svg";
import minus from "../images/Minus.svg";

const Second = (props) => {
  return (
    <div>
      <div className="second-row">
        <div className="close">
          <input type="image" src={close} />
        </div>
          <img className="r-max-1" src={rmax1} />
        <div className="beside">
          <div>
            <p>Refuel Max</p>
          </div>
          <div className="buttons">
            <input onClick={props.onPlusButtonClick} type="image" src={plus} />
            <div className="value">
              <p>{props.value2}</p>
            </div>
            <input onClick={props.onMinusButtonClick} type="image" src={minus} />
          </div>
        </div>
        <div className="price1">
          <p>#{props.price2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Second;
