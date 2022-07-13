import React from 'react';

const Button = ({type, value,id, button,image_src,description,handleClick})=>{
    
    return (
        <div>
            <button 
                type={type}  
                value={value}
                id={id}
                className={button}
                onClick={handleClick}
            >
              <img src={image_src} alt={description} />
            </button>
        </div>
    )
}

export default Button;
