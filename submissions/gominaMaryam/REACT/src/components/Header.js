import React from "react";

const Header = () => {
	return (
		<header>
			<h3 className="logo">
				Food<span>Bag</span>
			</h3>
			<nav>
				<ul className="nav-list">
					<li className="nav-items">
						<span>Cart</span>
						<span className="active-cart"></span>
					</li>
					<li className="nav-items">
						<span>Login</span>
					</li>
					<li className="nav-items">
						<span className="signup">
							Sign Up
						</span>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
