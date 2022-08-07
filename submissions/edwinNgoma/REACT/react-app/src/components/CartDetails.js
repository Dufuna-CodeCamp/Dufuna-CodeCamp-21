import React from 'react'
import Button from './Button'

export default function CardDetails({number,buttonClick,value}) {

  return (
      
    <div className="cart-title">
    <div className="home-time">
       
       <p><span> Home </span>{" >"} Cart</p>
    </div>

    <div className="main-cart-time">
          Cart
      <div className='remove-all-items-from-cart'>
      <p id='number-of-items'>{number} Items </p>

      {value===0?<p></p> : <span><Button button="remove-all" buttonClick = {()=> buttonClick()} 
       buttonName = "Remove all"/> </span>}
      </div>

    </div>
 </div>
  )
}
