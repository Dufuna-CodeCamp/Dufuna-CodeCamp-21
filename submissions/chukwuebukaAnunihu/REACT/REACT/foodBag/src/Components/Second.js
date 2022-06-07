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
          <input type="image" src={close} alt="close sign"/>
        </div>
          <img className="r-max-1" src={rmax1} alt="A bowl of rice, chicken and a bottle of coke"/>
        <div className="beside">
          <div>
            <p>Refuel Max</p>
          </div>
          <div className="buttons">
            <input onClick={props.onPlusButtonClick} type="image" src={plus} alt="plus sign"/>
            <div className="value">
              <p>{props.value2}</p>
            </div>
            <input onClick={props.onMinusButtonClick} type="image" src={minus} alt="minus sign"/>
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
