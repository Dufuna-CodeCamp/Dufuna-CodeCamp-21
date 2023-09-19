import React from 'react'

function Delivery(props) {
  return (
    <div className='row'>
        <div className='food flex'>
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