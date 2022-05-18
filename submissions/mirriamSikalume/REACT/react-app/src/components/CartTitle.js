import React from 'react'
import carttitle from './carttitle.css'
export const Body = () => {
  return (
    <div>
         <div className="home">
            <p>
                <span className="H">Home {">"}</span>
                <span>Cart</span>
            </p>
        </div>
        <div className="cart" >
            <h1>Cart</h1>
        </div>
        <div className='items'>
        <p>4 items</p>
        <p span>Remove all</p>
        </div>
    </div>
  
  )
}
