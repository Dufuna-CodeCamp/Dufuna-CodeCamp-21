import React from 'react'
// import CartItem from './CartItem'

function Total(props) {
  return (
    <div className='ml-10 row'>
        <div className='food-section total'>
            Total
        </div>
        <div className='total-money'>#{props.price}</div>
</div>
  )
}

export default Total