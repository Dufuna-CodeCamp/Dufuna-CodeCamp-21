import React from "react";

const CartList = ({ id, name, img, price, amount,increase, decrease }) => {
	return (
		<div className="flex">
			<div className="cart-box">
				<img
					src={require("../images/vector2.png").default}
					alt="cancel"
					className="cancel-order"
				/>
				<div className="cart-item">
					<img src={img} alt={name} className="order-img" />
					<div className="cart-menu">
						<p className="cart-text">{name}</p>
						<div>
							<button onClick={() => increase(id)}>+</button>
							<span> {amount} </span>
							<button onClick={() => decrease(id)}>-</button>
						</div>
					</div>
				</div>
				<h4 className="cart-text">#{price.toLocaleString()}</h4>
			</div>
		</div>
	);
};

export default CartList;
