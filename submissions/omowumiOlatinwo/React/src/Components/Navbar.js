import React from 'react'

const Navbar = () => {
  return (
    <div>
       <header className="header">
            <h1 className="logo">Food<span style={{color: "maroon"}}>Bag</span></h1>
            <ul className='main-nav d-flex justify-content-end'>
                <li style={{color: "maroon"}}>Cart</li>
                <li>Login</li>
                <li id="sign">Sign up</li>
            </ul>
        </header>
    </div>
  )
}

export default Navbar
