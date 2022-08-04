import React from 'react'
import Header from './Header';
import Vbreadcrumb from './Vbreadcrumb';
import VHeading from './Vheading';
import VButton from './Vbutton';
import VInput from './Vinput';


function Verification(){
    return(
        <div className='container'>
            <Header/>
            <Vbreadcrumb/>
            <VHeading/>
            <VInput/>
            <VButton/>
            
        </div>
    )

}

export default Verification;