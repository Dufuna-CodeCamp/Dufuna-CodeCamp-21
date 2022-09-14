import './NavBar.css';
import { Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav>
                <span className="FoodBag">Food<strong>Bag</strong></span>
                <div className='NavContent'>
                    <a href="#" className="Ct">Cart</a>
                    <a href="#" className="Lg">Login</a>
                    <a href="#" className="SignUp">Sign up</a>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar;