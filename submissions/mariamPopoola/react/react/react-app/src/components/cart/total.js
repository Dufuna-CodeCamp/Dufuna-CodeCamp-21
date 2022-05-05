import React from 'react';

const Total =(props)=>{
    return(
        <div className='total'>
            <p>Total</p>
            <p className="itemPrice"><span>#</span> 13 600{props.totalPrice}</p>
        </div>
    )
};
export default Total;