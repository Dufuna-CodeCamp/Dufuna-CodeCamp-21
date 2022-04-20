import React from 'react';

function Header(){
    return(
       <div>
            <nav className="navbar">
                <h5>food<span>Bag</span></h5>
                <ul>              
                    <li><a href="/" className="cart">cart</a></li>
                    <li><a href="/">login</a></li>
                    <li className="signup-btn"><a href="/">sign up</a></li>
                </ul>
            </nav>
       </div>
    )
};

export default Header;