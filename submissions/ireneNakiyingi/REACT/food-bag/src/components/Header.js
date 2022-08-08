import React from "react";
import './Header.css'

function Header (){
    return(
        <div className="header">
        <div className="name">
            <h4 className="A">Food </h4>
            <h4 className="B">Bag</h4>
        </div>
        <div className="nav">
            <a href='Cart.js' className="page-links cart">Cart </a>
            <a href='/' className="page-links">Login</a> 
            <a href='/' className="page-links signup">SignUp</a>
            
        </div>
    </div>
    )
    
}
export default Header;