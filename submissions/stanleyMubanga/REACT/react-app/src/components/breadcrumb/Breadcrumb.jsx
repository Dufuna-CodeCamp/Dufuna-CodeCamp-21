import React from 'react';
import './breadcrumb.css';

function Breadcrumb() {

    const    crumbPath = '>'


    return (
        <div className='breadcrumb'>
            <div className='crumb'>
                <a href="/" className='crumb-link back-a' id="">
                    <h5>
                        Home
                    </h5>
                </a>
            </div>
            <span>
                {crumbPath}
            </span>
            <div className='crumb'>
                <a href="/" className='crumb-link' id="">
                    <h5>
                        Cart
                    </h5>
                </a>
            </div>
        </div>
    )
}

export default Breadcrumb;