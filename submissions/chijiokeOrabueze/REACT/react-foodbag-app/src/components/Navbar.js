import React from 'react';
import Button from "./Button";

const Navbar = () =>{
    return(
        <div className="nav-container">
            <h3 className="log"><a href="#" >Food<span>Bag</span></a></h3>
            <div className="nav-links">
                <li className="nav-link"><a href="#">Cart</a></li>
                <li className="nav-link"><a href="#">Login</a></li>
                <Button 
                name="Sign up"
                backgroundColor="white"
                color="brown"
                padding="10px 20px"/>
            </div>
        </div>
    )
}

export default Navbar;