
import React, { Component } from 'react';

const Button = ({imageId,iconName,imageName,addButton}) => {

    return (

        <div>
           <button

           id= {addButton}
     
           >
          <img id = {imageId} src={iconName} alt={imageName}></img>
           </button>
        </div>
    )
}
 
export default Button;