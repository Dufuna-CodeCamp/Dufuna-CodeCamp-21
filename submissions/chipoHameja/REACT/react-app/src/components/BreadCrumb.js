import React from 'react';
import BreadCrumbPart from './BreadCrumbPart';

function BreadCrumb() {
    return <div className='bread-crumb'>
        <BreadCrumbPart crumbName="Home > " crumbColor="#C9C9C9" />
        <BreadCrumbPart crumbName="Cart" crumbColor="#000000" />
    </div>
}

export default BreadCrumb;