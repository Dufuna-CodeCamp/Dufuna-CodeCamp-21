import React from 'react';

function Nav() {
  return (
    <div>
      <header>
        <nav>
          <div className='logo'>
            <li>
              <a href='/'>
                Food<span className='bag'>Bag</span>
              </a>
            </li>
          </div>
          <button className='right'>
            <a href='/'>Sign up</a>
          </button>
          <li className='right'>
            <a href='/'>Login</a>
          </li>
          <li className='right'>
            <a href='/' className='star'>
              Cart
            </a>
          </li>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
