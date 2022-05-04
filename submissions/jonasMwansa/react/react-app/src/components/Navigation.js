import React from 'react';


const NavigationItem = (props)=>{

    return(
        <div>
            <header>
                <div id="logo">
                    <a href="../../public/index.html"><h2>Food<span>Bag</span></h2></a>
                </div>
            </header>
    {/*--header ends here--> */}
    
    <div class="navigation">
        <nav>
            <a href="../../public/index.html" id="signup-link">Sign up</a>
            <a href="../../public/index.html">Login</a>
            <a href="../../public/index.html" id='cart-link'>Cart</a>
        </nav>
    </div>
    </div>
    );
}

export default NavigationItem; 