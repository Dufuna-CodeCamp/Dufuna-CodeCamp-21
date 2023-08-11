import React from "react";
// import { Link } from "react-router-dom";

export const Button = (props) => {
    return (
         <div className={props.class}>
             <button className={props.buttonClass} onClick={props.handleClick}>{props.title}</button> 
         </div> 
    )
}