import React from 'react'

export const VerificationButton = (props) => {
  return (
    <div>

     <button className={props.buttonClass} >
     {props.name}
     </button>
    </div>
  )
}
