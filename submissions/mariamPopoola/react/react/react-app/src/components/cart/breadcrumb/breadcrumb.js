import React from 'react';
import BreadcrumbPart from './breadcrumbPart';

const Breadcrumb = () =>{
    return(
        <div>
            <BreadcrumbPart breadcrumbNav = "Home > "/>
            <BreadcrumbPart breadcrumbNav = "cart"/>
        </div>
    )
};
export default Breadcrumb;