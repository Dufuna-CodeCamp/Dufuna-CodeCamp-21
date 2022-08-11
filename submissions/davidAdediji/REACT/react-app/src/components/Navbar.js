import '../App.css'

const NavBar = ()=>{
    return(
        <nav className='navbar'>
            <p className="nav-title">Food<span className='py-color'>Bag</span></p>
            <ul className="nav-list">
                <li className='py-color'>Cart</li>
                <li>Login</li>
                <li><a className="py-color btn-primary"href="/#">Sign up</a></li>
            </ul>

        </nav>
    )
}

export default NavBar;