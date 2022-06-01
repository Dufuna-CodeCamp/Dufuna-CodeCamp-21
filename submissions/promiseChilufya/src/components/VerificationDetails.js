import React from 'react'
import image from './images/radio_button_checked.svg'

export default function VerificationDetails() {
  return (
      
    <div className="cart-description">
       <div className="home-time">
       
       <p><span> Home {" >"} Cart {" >"} </span>Verification</p>
    </div>

    <div className="main-cart-description">
     <h2>Verification</h2>
     <p1 id='confirm'>Confirm address & Payment</p1>
    </div>

    <div className='address'>
      <h3>Delivery Address</h3>

      <div className='delivery-order-image'>
      <p id='delivery-order'>Your order will be delivered to your address</p>
      <img className="delivery-image" src={image} alt="delivery"></img>
      </div>
    </div>
 </div>
  )
}