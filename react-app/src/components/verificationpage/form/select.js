import React from "react";

function Select(props){
    return(
        <div className = "form-control">
            <label htmlFor={props.name} className = "">
                {props.title}
            </label>
            
            <select 
            className=""
            id ={props.name}
            name = {props.name}
            value ={props.value}
            onChange ={props.handleChange}
            >
            <option value="" disabled>
                {props.placeholder}
            </option>
            {props.options.map((option) =>{
                return(
                    <option key={option} value= {option} label= {option}>
                        {option}
                    </option>
                )
            })}

            </select>
        
        </div>
    )
}
export default Select;