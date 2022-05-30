import React from 'react'

import './css/Input.css';

export const Input = ({label, name, inputType, value, placeholder, handleInputChange}) => {
    return (
        <div className='input'>
            <label className='label' htmlFor={label}> {label} </label>

            <input 
                name={name} 
                id={name} 
                type={inputType} 
                value={value}
                onChange={handleInputChange}
                placeholder={placeholder} 
            />
            
        </div>
    )
}
