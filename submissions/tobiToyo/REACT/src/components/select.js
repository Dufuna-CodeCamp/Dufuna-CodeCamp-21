import React from 'react';
import './input.css';

const Select = (props) => {
  return(
    <div>
      <label htmlFor={props.name} className="input-label">{props.title}
      </label>
        <select 
        id={props.name} 
        name={props.name} 
        value={props.value} 
        onChange={props.selectChange}
        className="input"
         >

          {props.options.map((option) => {
            return (
              <option key={option} value={option} label={option}>{option}</option>
            )
          } )}
        </select>
      
    </div>
  )
}


export default Select;
