import React from 'react';
import'../../styles/cart.css';

class Header extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className="header">
                    <div className="foodbag">
                        <h4>Food</h4>
                        <h4 className="bag">Bag</h4>
                    </div>

                    <ul>
                        <li><a href="#" className="a_cart">Cart</a></li>
                        <li><a href="#">login</a></li>
                        <li><a href="#" className="su">Sign up</a></li>
                    </ul>
                </div>

                <div>
                    <span  className="hero"><a href="../../../../public/index.html" className="fent">Home{" >  "} </a>  Cart</span>
                    <h2>Cart</h2>
                </div>          
           
            </React.Fragment>
        )
    }

}

export default Header;