import React from "react";

const Trail = (props) => {
    return(
        <div className="trail-text">{props.grey} <span id="trail-text-bold">{props.bold}</span></div>
    )
}

export default Trail;