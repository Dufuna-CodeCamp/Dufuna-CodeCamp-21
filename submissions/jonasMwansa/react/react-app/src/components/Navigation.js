import React from 'react';
import ReactDOM from 'react-dom';


const NavigationItem = (props)=>{

    return(
        <div>
            <header>
                <div id="logo">
                    <a href="#"><h2>Food<span>Bag</span></h2></a>
                </div>
            </header>
    {/*--header ends here--> */}
    
    <div class="navigation">
        <nav>
            <a href="#" id="signup-link">Sign up</a>
            <a href="#">Login</a>
            <a href="#" id='cart-link'>Cart</a>
        </nav>
    </div>
    </div>
    );
}

export default NavigationItem; 