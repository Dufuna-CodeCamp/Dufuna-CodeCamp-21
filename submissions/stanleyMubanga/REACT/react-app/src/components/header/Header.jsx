import React from 'react';
import './header.css';

function Header() {

  return (
    <div className="top-header">
      <div className='logo'>
        <h4 className='logoA'>food</h4>
        <h4 className='logoB'>Bag</h4>
      </div>
      <ul className='topNav'>
        <li><a href="/" className='page-links'>Cart</a></li>
        <li><a href="/" className='page-links'>Log in</a></li>
        <li><a href="/" className='border-btn'>Sign up</a></li>
      </ul>
    </div>
  )
}

export default Header;
