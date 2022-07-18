import React from 'react';
import './pageStyle.css';
import success from '../../../assets/Illustration_success.svg';

function OrderSuccess() {
  return (
    <div className="wrapper-success">
        <div className="hero">
            <section className="image">
                <img src={success} alt="order successful"/>
            </section>
            <h2 className='order-heading'>
                Order successful
            </h2>
            <p className="order-caption">
                We have started processing
            </p>

            <p className="order-caption">  
                your order.
            </p>
        </div>
    </div>
  )
}

export default OrderSuccess;