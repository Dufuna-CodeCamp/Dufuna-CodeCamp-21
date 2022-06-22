import React from 'react';

function Delivery(props) {
    return <div id="delivery">
        <div id="delivery-properties">
            <img src={props.deliveryImage} alt="Delivery" />
            <p id='delivery-fee-text'>Delivery fee</p>
            <p id='delivery-fee-price'><span>#</span>{props.deliveryPrice}</p>
        </div>
        <hr id="last" />
    </div>
}

export default Delivery;