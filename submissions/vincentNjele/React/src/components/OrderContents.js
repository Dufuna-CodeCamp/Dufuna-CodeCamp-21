
import React from 'react'
import image from './images/Illustration_success.svg'

export const OrderContents = () => {
  return (

    <div>
    
        <img id='success' src = {image}  alt='success'></img>

        <div className='success-info'>
        <p id='order'>Order successful</p>
        <p id='processing'>We have started processing your order.</p>
        </div>
    </div>
  )
}
