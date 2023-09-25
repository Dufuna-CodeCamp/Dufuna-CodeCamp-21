import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <>
        <nav>
            <img id='logo' src={props.logo} alt='' />
            <Link to='/cartpage'>
                <div className="nav-item">{props.navItem1}</div>
            </Link>

            <Link to='/login'>
                <div className="nav-item">{props.navItem2}</div>
            </Link>

            <Link to='/signup'>
                <button className="nav-item signup">{props.navItem3}</button>
            </Link>

            
        </nav>
    
        <p class="home">{props.home} {props.arrow} <span id="home">{props.category}</span></p>
        <p id='bold'>{props.category}</p>
    </>
  )
}

export default Navbar