/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Navbar = () => {
  return (
    <header>
    <nav className="navbar">
      <p className="logo">
        Food<span className="red-text">Bag</span>
      </p>
      <div className="nav">
        <ul className="nav-list">
          <li className="nav-list-items"><a href="/">Cart</a></li>
          <li className="nav-list-items"><a href="#">Login</a></li>
        </ul>
        <button type="button" className="nav-btn">
          Sign up
        </button>
      </div>
    </nav>
  </header>
  )
}

export default Navbar