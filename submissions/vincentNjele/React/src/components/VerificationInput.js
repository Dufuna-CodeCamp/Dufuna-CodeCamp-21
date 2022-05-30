import React from 'react'

export const VerificationInput = (props) => {
  return (
    <div>
    <label  id = {props.lableId}> {props.name}
    </label>
    <br/>
     <input
      id= {props.inputId}
       placeholder = {props.placeholder}
      >
     
     </input>
    </div>
  )
}
