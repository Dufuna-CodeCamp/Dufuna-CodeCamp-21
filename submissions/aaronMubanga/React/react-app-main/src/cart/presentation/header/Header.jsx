import React from 'react';
import'../../styles/cart.css';
import { Link } from 'react-router-dom';

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
                        <li><Link to="/" className="a_cart">Cart</Link></li>
                        <li><a href="../../../../public/index.html">login</a></li>
                        <li><a href="../../../../public/index.html" className="su">Sign up</a></li>
                    </ul>
                </div>           
           
            </React.Fragment>
        )
    }

}

export default Header;