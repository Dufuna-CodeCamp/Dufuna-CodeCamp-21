import { Link } from "react-router-dom";
import './css/Header.css';

function Header({cartItems}) {

    return (
        <header>
            <div className="logo">
               <Link to='/'> <img src="./assets/FoodBag.svg" alt="" /> </Link>
            </div>
            <nav>                
                <ul>
                    <li ><Link to='/CartPage'>Cart<span className="nav-cart">{cartItems.length}</span></Link></li>                    
                    <li><Link to='/'>Login</Link> </li>
                    <li className="signup" ><Link to='/'>Sign up</Link> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header