import React from 'react';
import './Vbutton.css'
import {Link} from 'react-router-dom'

function VButton(){
    return(
        <div >
            
                <Link to='/Success' className='paybtn'><button className='paybtn' value='Pay'>
                Pay</button></Link>
            
           
        </div>
        
    )

};

export default VButton;