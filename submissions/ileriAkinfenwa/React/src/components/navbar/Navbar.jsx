import React from 'react'
import "./navbar.css"

export const Navbar=(props) => {
  return (
    <div className="foodbagcontainer">
        <div className="navbar">
            <div className="navlogo">
                <h3 style={{cursor:'pointer'}} onClick={()=>props.handleShowCart(false)}>Food<span>Bag</span></h3>
            </div>
            <div className="navlinks">
                <div style={{cursor:'pointer', display:"flex"}} onClick={()=>props.handleShowCart(true)}>Cart <div style={{visibility: props.count ? "visible": "hidden" ,backgroundColor: props.count ? " #AD4C4C": "hidden",color: props.count ? " #AD4C4C": "hidden",borderRadius:"50%", fontSize:'10px',width:"8px",height:'8px', position:"absolute",right:'138px' }}></div></div>
                <a href="login">Login</a>
                <a href="signup">Sign up</a>
            </div>
         </div>
    </div>
  )
}
