import React from "react";

const HeaderLink = (props) => {


    return (
        <div>
            <a href={props.href} className="header-links" style={{color: props.color}}>{props.title}</a>
        </div>
    )
}

export default HeaderLink;