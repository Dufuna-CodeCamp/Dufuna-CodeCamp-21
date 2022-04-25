import React from 'react';
import {OrderContent} from './OrderContent';
import OrderNavbar from './OrderNavbar';
import './styles.css';

export const OrderHolder = () => {
  return (
    <div>
        <div className="order-content">
            <OrderNavbar />
            <OrderContent />
        </div>
      
    </div>
  )
}

export default OrderHolder;
