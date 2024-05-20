import React from "react";
import Checkout from "../Component/Checkout";

const CheckoutPage = () => {
    return (
       <div className="container">
            <p className="fs-md poppins-regular"><span className="gray-text">Home &#62; </span><span className="gray-text">Cart &#62; </span><span>Verification</span></p>
             <div className="headingText poppins-semibold">
                <div>
                    <h1 className="fs-xl">Verification</h1>
                    <p className="fs-lg red-text">Confirm Address & payment</p>
                </div>
            </div>
            <div className="headingText flex">
                <div>
                    <h1 className="fs-md poppins-semibold">Delivery Address</h1>
                    <p className="fs-md poppins-regular">Your order will be delivered to your address</p>
                </div>
                <img src="./images/Vector.png" alt="address"/>
            </div>
            <Checkout />
       </div>
    )
}
export default CheckoutPage