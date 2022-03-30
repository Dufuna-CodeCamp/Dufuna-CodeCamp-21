import React, { useContext } from 'react'
import Button from './Button'
import { MainContext } from "../context/mainContext";

export default function CardDetails({number}) {

  const {cartItems,buttonClick} = useContext(MainContext)
  return (
      
    <div className="cart-title">
    <div className="home-time">
       
       <p><span> Home </span>{" >"} Cart</p>
    </div>

    <div className="main-cart-time">
          Cart
      <div className='remove-all-items-from-cart'>
      <p id='number-of-items'>{number} Items </p>

      {cartItems.length!==0?<span><Button button="remove-all" buttonClick = {()=> buttonClick()} 
       buttonName = "Remove all"/> </span>:<p></p> }
      </div>

    </div>
 </div>
  )
}
