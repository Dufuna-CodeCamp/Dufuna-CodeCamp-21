import React from 'react';
import './style.css';

 function FormInput(props) {
  return (
    <div className="input">
        <label htmlFor={props.id}>
            <h3>{props.title}</h3>
        </label>
        <input id={props.id} type={props.inputType} placeholder={props.placeholder} className="text" />
    </div>
  )
}

export default FormInput;