import React from 'react'

function Total(props) {
  return (
    <div className='ml-10 row'>
        <div className='food-section total'>
            Total
        </div>
        <div className='total-money'># {props.totalPrice}</div>
</div>
  )
}

export default Total