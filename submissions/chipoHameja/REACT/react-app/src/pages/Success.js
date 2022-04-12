import React from 'react';
import success from '../assets/success.svg';

const Success = () => {
    return (
        <div>
            <img src={success} alt="Success" id='success-img' />

            <div id='order-successful'>Order successful</div>
            <div id='success-text'>We have started processing your order.</div>
        </div>
    );
}

export default Success;