import React from 'react'

export const VerificationButton = (props) => {
  return (
    <div>

     <button onClick={props.buttonClick} className={props.buttonClass} >
     {props.name}
     </button>
    </div>
  )
}
