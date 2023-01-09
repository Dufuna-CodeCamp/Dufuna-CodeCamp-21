import React from "react";

function Input(props){
    return(
        <div id="inputBlock">
            <label className="form-label" htmlFor={props.name}>{props.title}</label>
            <input className="form-control" type={props.type} value={props.value} placeholder={props.placeholder} id={props.name} onChange={props.handleChange}/>
        </div>
    )
}

export default Input;