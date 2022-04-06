import React, { useState } from "react";
import { Link } from "react-router-dom";

import CartList from "./CartList";
import "./cartpage.css";

const CartPage = () => {

	const [cart, setCart] = useState([
		{
			id: 1,
			name: "KFC - King Bucket",
			amount: 1,
			price: 5000,
			single: 5000,
			img: require("../images/item2.png").default,
		},
		{
			id: 2,
			name: "Refuel Max",
			amount: 1,
			price: 600,
			single: 600,
			img: require("../images/item3.png").default,
		},
		{
			id: 3,
			name: "Refuel Max",
			amount: 1,
			price: 600,
			single: 600,
			img: require("../images/item1.png").default,
		},
	]);

	let cartSum = cart
		.map((item) => item.price)
		.reduce((prev, curr) => prev + curr, 0);

	let delivery = cartSum === 0 ? 0 : 1200;
	let total = cartSum + delivery;

	const increase = (id) => {
		setCart((prev) =>
			prev.map((item) => {
				return item.id === id
					? {
							...item,
							amount: item.amount + 1,
							price: item.price + item.single,
					  }
					: item;
			})
		);
	};

	const decrease = (id) => {
		setCart((prev) =>
			prev.map((item) => {
				return item.id === id && item.amount >= 0
					? {
							...item,
							amount: item.amount - 1,
							price: item.price - item.single,
					  }
					: item;
			})
		);
	};
	return (
		<div>
			<section>
				<div className="">
					<p className="nav">
						<span>Home {`>`} </span>Cart
					</p>
				</div>
			</section>
			<h2 className="head-page">Cart</h2>
			<section className="mobile-cart">
				<p>{cart.length + 1} items</p>
				<p>Remove all</p>
			</section>
			<section className="cart-container">
				{cart.map((item) => {
					return (
						<CartList
							key={item.id}
							{...item}
							increase={increase}
							decrease={decrease}
						/>
					);
				})}
				<div className="cart-box">
					<div className="cart-item delivery">
						<img
							src={require("../images/scooter 1.svg").default}
							alt="delivery"
							className="scooter"
						/>
						<p className="cart-text">Delivery fee</p>
					</div>
					<h4 className="cart-text">#{delivery.toLocaleString()}</h4>
				</div>
				<div className="total">
					<h3>TOTAL</h3>
					<h2>#{total.toLocaleString()}</h2>
				</div>
			</section>
			<div className="checkout">
				<Link to='/verification'>
					<button>Checkout</button>
				</Link>
			</div>
		</div>
	);
};

export default CartPage;
