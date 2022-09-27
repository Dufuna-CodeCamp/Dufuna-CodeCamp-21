import React from "react";
import OrderSuccess from "../../assets/illustration_success.svg";
import './OrderSuccessful.css'

const OrderSuccessful = () => {
    return (
        <div className="Success">
            <img src={OrderSuccess} className="SuccessImg"/>
            <div className="SuccessTxt">Order Successful</div>
            <div className="SuccessSubTxt">We have started processing your order.</div>
        </div>
    );
}

export default OrderSuccessful;