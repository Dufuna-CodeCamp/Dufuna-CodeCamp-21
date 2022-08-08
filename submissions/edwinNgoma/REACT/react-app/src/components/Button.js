import React from "react";

const Button = ({button,buttonClick,buttonName}) => {

    return (

        <div>
         <button id={button} onClick = {buttonClick} > 
          {buttonName}
         </button>
        </div>
    )
}

export default Button;