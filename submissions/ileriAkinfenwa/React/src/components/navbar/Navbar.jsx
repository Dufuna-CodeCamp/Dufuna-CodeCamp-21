import React from 'react'
import "./navbar.css"

export const Navbar=(props) => {
  return (
    <div class="foodbagcontainer">
        <div class="navbar">
            <div class="navlogo">
                <h3 style={{cursor:'pointer'}} onClick={()=>props.handleShowCart(false)}>Food<span>Bag</span></h3>
            </div>
            <div class="navlinks">
                <div href="cart" style={{cursor:'pointer'}} onClick={()=>props.handleShowCart(true)}>Cart <sup style={{marginLeft:'-2px'}}> {props.count}</sup></div>
                <a href="login">Login</a>
                <a href="signup">Sign up</a>
            </div>
         </div>
    </div>
  )
}
