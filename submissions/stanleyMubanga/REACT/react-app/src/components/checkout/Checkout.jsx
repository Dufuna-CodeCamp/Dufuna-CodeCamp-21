import React from 'react';
import {Link} from 'react-router-dom';
import './checkout.css';

function Checkout() {
    return (
        <button className='checkout'>
            <Link className='checkout-link' to="/Verification">Checkout</Link>
        </button>
    )
}

export default Checkout;