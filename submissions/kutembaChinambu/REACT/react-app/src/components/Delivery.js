import React from "react";

const Delivery = (props) => {
    return (
        <div>
            <ul className="wrapper22">
                <li id="deliver"><img id="delivery" src={props.image} alt="delivery bike"/></li>
                <li><h3 id="fee">{props.feeTag}</h3></li>
                <li><h3 id="priceDelivery">#{props.price}</h3></li>
            </ul>
            

        </div>
    )
}
export default Delivery;

 