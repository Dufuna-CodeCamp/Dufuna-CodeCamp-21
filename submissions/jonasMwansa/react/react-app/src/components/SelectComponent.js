import React from "react";

    const SelectComponent = (props,{value})=>{
    
    return (
        <div>
            <label htmlFor={props.name} >
                {props.title}
            </label>
           
                <select

                id={props.id}
                value={value}
                onChange={props.handleChange}
                
            >
            {props.options}
              

                
            </select> 
        
               

 
        </div>
    );

}


export default SelectComponent;