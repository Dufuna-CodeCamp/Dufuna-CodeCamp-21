import React from 'react';
import './Vbreadcrumb.css'

const Vbreadcrumb=()=>{
    return(
        <div className='crumb-container'>
            
            <div className="crumb">
                <a href="/" className="h-link " >
                <h5> Home</h5>
                </a>
                
            </div>
            <span className="h-link "> {'>'} </span>
            
            <div className="crumb">
            <a href="/" className="c-link" >
                <h5> Cart</h5>
                </a>
            </div>
            <span className="c-link" > {'>'} </span>
            
            <div className="crumb">
            <a href="/" className="v-link" >
                <h5> Verification</h5>
                </a>
            </div>

        </div>

    )
}
export default Vbreadcrumb;