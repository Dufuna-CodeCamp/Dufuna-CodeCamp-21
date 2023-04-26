import React from "react";
function Header(props){
    return(
        <>
            <div className='row header'>
                <div className='col name'>
                    <p id="title" className="name"><span id="food" className="title">Food</span><span id="bag" className="title">Bag</span></p>
                </div>
                <div className='col navdiv'>
                    <ul>
                    <li className="nav title">Cart</li>
                    <li className="nav title">Login</li>
                    <li className="nav title"><button id="btnsignup" className="title">Sign up</button></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header