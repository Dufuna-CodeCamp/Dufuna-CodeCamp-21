import React from 'react';
import './input.css'

const Input = (props) => {

  return (
    <div>
        <label 
          htmlFor={props.name} 
          className="input-label"> 
          {props.title}
        </label >
            
            <input 
                name={props.name} 
                type={props.inputType} 
                value={props.value} 
                onChange={props.inputChange}
                placeholder={props.placeholder} 
                className="input"
            />
    </div>
  )
}

export default Input;