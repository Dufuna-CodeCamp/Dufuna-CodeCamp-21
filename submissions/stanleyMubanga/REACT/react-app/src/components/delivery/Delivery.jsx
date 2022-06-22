import React from 'react';
import './delivery.css';
import scooter from '../../assets/scooter 1.svg';
import Close from '../../assets/close.svg';

function Delivery() {
    // const devHeight =   'height: 100%;'

    


    return (
        <div className='delivery cart-item'>
            <span className='remove-cartItem-rm'>
                <img src={Close} alt='' className='remove-remove'/>
            </span>
            <div className='item-image-d' >
                <img src={scooter} alt="delivery" />
            </div>
            <div className="info">

                <h3 className='item-name d-name'>Delivery Fee</h3>



            </div>
            
            <h3 className="price">#1200</h3>
            
        </div>
    )
}

export default Delivery;