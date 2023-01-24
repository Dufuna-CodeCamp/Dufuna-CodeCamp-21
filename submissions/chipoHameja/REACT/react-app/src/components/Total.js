import React from 'react';

function Total(props) {
    return <div id='total'>
        <p id='total-text'>Total</p>
        <p id='total-price'><span>#</span>{props.totalPrice}</p>
    </div>
}

export default Total;