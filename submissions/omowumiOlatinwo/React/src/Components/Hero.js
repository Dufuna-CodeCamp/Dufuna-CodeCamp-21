import React from 'react'

const Hero = () => {
  return (
    <div>
        <p>
        <span style={{color: "grey"}}>Home &gt;</span> Cart
        </p>
        <h4>Cart</h4>
        <div className='row' style={{display: "flex"}}>
        <h5 className='col items' style={{color: "rgb(168, 7, 7)"}} >4 items</h5>
        <h5 className='col d-flex justify-content-end items' style={{color: "rgb(168, 7, 7)"}} ><a href = "/" style={{color: "rgb(168, 7, 7)"}}>Remove all</a></h5>
         </div>
    </div>
  )
}

export default Hero
