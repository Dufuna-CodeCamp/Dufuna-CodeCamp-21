import React from 'react'

export const Button = ({id,onClick,img,imageId}) => {
  return (
    <div>
        <button id= {id} 
        onClick = {onClick}
        >

        <img id={imageId} src= {img} alt='btn'></img>
        </button>

        
    </div>
  )
}
