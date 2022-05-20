import React from 'react';

const SuccessPart = (props) =>{
    return(
        <div className = "success">  
            <img src={props.image} alt={props.imageName} className=""/>
            <div className = "success-Message">
                <p>{props.order}</p>
                <p>{props.orderMessage}</p>
            </div>
        
        </div>
    )
};
export default SuccessPart; 