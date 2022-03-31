import React from 'react';

function NavBar() {
    return <nav>
        <div className='site-name'>
            <a href='#'><div className='first-part'>Food</div><div className='second-part'>Bag</div></a>
        </div>
        <ul id="nav-links">
            <li id="nav-cart"><a href='/'>Cart</a></li>
            <li id="login"><a href='/'>Login</a></li>
            <li id="sign-up"><a href='/'>Sign up</a></li>
        </ul>
    </nav>
}

export default NavBar;