import React from 'react';
import './Delivery.css';
import Scooter from './images/scooter 1.svg';


function Delivery() {
    return(
        <div className='deliver cart-item'>
            
            <div className='scooter-img'>
                <img src={Scooter} alt='scooter' />
                <h3 className='deltext'> Delivery Fee</h3>
                <h3 className='fee'>#1200</h3>
            </div>
            

        </div>
    )
    
}

export default Delivery;