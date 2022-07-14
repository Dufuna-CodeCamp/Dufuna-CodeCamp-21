import React from 'react'
import {Link} from 'react-router-dom';
import '../checkout/checkout.css';

function Pay() {
  return (
    <button className='checkout'>
      <Link className='checkout-link' to="/OrderSuccess">Pay</Link>
    </button>
  )
}

export default Pay;