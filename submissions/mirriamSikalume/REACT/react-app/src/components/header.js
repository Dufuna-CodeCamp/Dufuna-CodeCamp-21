import React from 'react'
import header from './header.css';
export const Header = () => {
  return (
    <div>
        <div className="Nav">
        <a id="cart" href="#">Cart</a>
        <a href="#">Login</a>
        <a id="sign-up" href="#">Sign up</a>
        </div>
                
       
        <div className="FB">
                <h2 className="f">Food</h2>
                <h2 className="b">Bag</h2>
        </div>
            
        
    </div>

  )
}
