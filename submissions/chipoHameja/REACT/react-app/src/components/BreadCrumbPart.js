import React from 'react';

function BreadCrumbPart(props) {
    return <a href='/' className='crumb' style={{color: props.crumbColor}}>{props.crumbName}</a>
}

export default BreadCrumbPart;