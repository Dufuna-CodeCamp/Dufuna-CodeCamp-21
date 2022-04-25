import React from 'react';
import BreadcrumbPart from '../cart/breadcrumb/breadcrumbPart';

const VerifBreadcrumb =(props)=>{
    return(
        <div>
            <BreadcrumbPart breadcrumbNav ="Home >"/>
            <BreadcrumbPart breadcrumbNav ="Cart >"/>
            <BreadcrumbPart breadcrumbNav ="Verification"/>
        </div>
    )
};
export default VerifBreadcrumb;