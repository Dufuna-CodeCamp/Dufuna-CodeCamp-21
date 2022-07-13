import React from 'react'
import Button from './Button'

export default function CardDetails({number,buttonClick,value}) {

  return (
      
    <div className="cart-title">
          <div className="home-time">
            
            <p><span> Home </span>{" >"} Cart</p>
          </div>

      <div>
        <div className="bold-cart">
          <p>Cart</p>
        </div>
        <div className='remove-all-items-from-cart'>
          {value===0?<p></p> : <span><Button button="remove-all" buttonClick = {()=> buttonClick()} 
          buttonName = "Remove all"/> </span>}
        </div>

      </div>
    </div>
  )
}
