import React from 'react';

const Button = ({type, value,id, button,image_src,description,handleChange})=>{
    
    return (
        <div>
            <button 
                type={type}  
                value={value}
                id={id}
                className={button}
                onClick={handleChange}
            >
              <img src={image_src} alt={description} />
            </button>
        </div>
    )
}

export default Button;
