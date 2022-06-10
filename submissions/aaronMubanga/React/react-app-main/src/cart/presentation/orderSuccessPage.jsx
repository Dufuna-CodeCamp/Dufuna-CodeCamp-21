import React from 'react';
import Header from './header/Header';
import Image from '../assets/images/sucess.png';

const OrderSuccess = ()=>{


    return (
        <React.Fragment>
            <Header />
            <div className="orderSuccess">
                <img src={Image} alt="orderSuccess" />
                <div className="texts">
                <h3>Order Successfull!</h3>
                <p>We have started processing your order.</p>
                </div>
                
            </div>
        </React.Fragment>
    )
}

export default OrderSuccess;