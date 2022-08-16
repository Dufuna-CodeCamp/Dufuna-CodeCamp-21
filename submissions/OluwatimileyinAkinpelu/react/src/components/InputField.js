import React from 'react'

const InputField = ({label, onChange, type, placeholder, value, name, containerVariant}) => {

    return (
        <div className={`d-flex flex-column ${containerVariant}`}>
         <label className="input-label">{label}</label>
        <input
            type={type}
            className='input-field'
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChange}
        />
        </div>   
    )
  }

export default InputField