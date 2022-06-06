import React from 'react';

const BreadcrumbPart = (props) =>{
    return(
        <a href="/" className = "breadcrumb">{props.breadcrumbNav}</a>
    )
}

export  default BreadcrumbPart;