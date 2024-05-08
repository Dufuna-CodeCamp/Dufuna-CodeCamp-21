import React from "react";

const DeliveryItem = (props) => {
    return (
        <div className="cart-details flex">
            <div className="flex">
                <div className="scooter" >
                    <img src="./images/scooter.svg" alt="Delivery"/>
                </div>
                <p className="poppins-semibold fs-md">Delivery Fee</p>
            </div>
            <p className="fs-md poppins-semibold">#{props.deliveryFee}</p>
        </div>
    )
}

export default DeliveryItem;