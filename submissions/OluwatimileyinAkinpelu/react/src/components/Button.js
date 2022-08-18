import React from 'react'

const Button = ({btnText, btnStyle}) => {
  return (
    <div className='text-center'>
        <button className={`submit-btn ${btnStyle}`}>{btnText}</button>
    </div>
  )
}

export default Button