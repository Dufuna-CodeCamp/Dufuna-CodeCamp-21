import React from "react";
import close from "../images/close.svg";
import rmax2 from "../images/image1.svg";
import plus from "../images/plus.svg";
import minus from "../images/Minus.svg";

const Third = (props) => {
  return (
    <div>
      <div className="third-row">
        <div className="close">
          <input type="image" src={close} />
        </div>
          <img className="r-max-2" src={rmax2} />
        <div className="beside">
          <div>
            <p>Refuel Max</p>
          </div>
          <div className="buttons">
            <input onClick={props.onPlusButtonClick} type="image" src={plus} />
            <div className="value">
              <p>{props.value3}</p>
            </div>
            <input
              onClick={props.onMinusButtonClick}
              type="image"
              src={minus}
            />
          </div>
        </div>
        <div className="price1">
          <p>
            #{props.price3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Third;
