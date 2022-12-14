import React from 'react'

const Hero = () => {
  return (
    <div>
        <p>
        <span style={{color: "grey"}}>Home &gt;</span> Cart
        </p>
        <h4>Cart</h4>
        <div className='row' style={{display: "flex"}}>
        <h5 className='col items' style={{color: "maroon"}} >4 items</h5>
        <h5 className='col d-flex justify-content-end items' style={{color: "maroon"}} ><a href = "/" style={{color: "maroon"}}>Remove all</a></h5>
         </div>
    </div>
  )
}

export default Hero
