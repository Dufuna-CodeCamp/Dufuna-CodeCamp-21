import React from 'react';


function Delivery(props){
    
    return (
        <div className="product-container delivery">
            <div className='imageAndButton'>
                <img src={props.image} alt='description' />
                <p className='deliver'>Delivery fee</p>
            </div>
            <div className="product-price">
                <p>#{props.fee}</p>
            </div>
     </div>
    )    

}    
   

export default Delivery;