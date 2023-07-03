import React from 'react'

const Navbar = (props) => {
  return (
    <>
        <nav>
            <img id='logo' src={props.logo} alt='' />
            <div className="nav-item">{props.navItem1}</div>
            <div className="nav-item">{props.navItem2}</div>
            <button className="nav-item signup">{props.navItem3}</button>
        </nav>
    
        <p class="home">{props.home} > <span id="home">{props.category}</span></p>
        <p id='bold'>{props.category}</p>
    </>
  )
}

export default Navbar