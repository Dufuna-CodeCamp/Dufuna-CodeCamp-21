import React from 'react';

const Delivery =(props)=>{
    return(
        <div>
            <div className='delivery'>
                <img src={props.deliveryImg} alt = "" className=""/>
                <p>{props.deliveryName}</p>
                <p className="itemPrice"><span>#</span> {props.deliveryPrice}</p>
            </div>
            <hr/>
        </div>
    )
};
export default Delivery;