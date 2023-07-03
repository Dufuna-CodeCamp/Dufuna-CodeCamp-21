import React from 'react'

function Delivery(props) {
  return (
    <div className='ml-10 row'>
        <div className='food-section'>
            <img id='scooter' src={props.productImage} alt='' />

            <div className='delivery'>
                {props.productName}
                
            </div>
        </div>
        <div className='delivery-money'>#{props.price}</div>
    </div>
      
  )
}

export default Delivery