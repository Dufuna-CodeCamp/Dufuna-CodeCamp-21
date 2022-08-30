import React from 'react'
import succesImage  from '../assets/icons/Success _Two Color 1.svg'


const OrderSuccessful = () => {
  return (
    <div className='d-flex flex-column items-center'>
        <div className='text-center'>
            <img src={succesImage} alt='success'/>
        </div>
        <div className='text-center'>
            <p className='success'>Order successful</p>
            <p className='text-deep-gray w-75'>We have started processing your order.</p>
        </div> 
    </div>
  )
}

export default OrderSuccessful