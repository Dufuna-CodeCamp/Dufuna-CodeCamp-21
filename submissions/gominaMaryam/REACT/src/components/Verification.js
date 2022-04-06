import React from "react";
import "./verification.css";

const Verification = () => {
	return (
		<div>
			<section>
				<div>
					<p className="nav">
						<span>Home {`>`} </span>
						<span>Cart {`>`} </span>Verification
					</p>
				</div>
			</section>
			<h2 className="head-page">Verification</h2>
			<p className="confirm-add">Confirm address & Payments</p>
			<div className="delivery-add">
				<div>
					<h5>Delivery Address</h5>
					<p>Your order will be deliverd to your address</p>
				</div>
				<input
					type="radio"
					name="confirmDelivery"
					id="confirmDelivery"
                    checked
				/>
			</div>
			<form>
				<div className="form-box">
					<label htmlFor="PhoneNumber">Phone number</label>
					<input
						type="tel"
						name="PhoneNumber"
						required
						id="PhoneNumber"
						placeholder="+234"
					/>
				</div>
				<div className="v-line"></div>
				<div className="form-box">
					<label htmlFor="PaymentMethod">Payment method</label>
					<select
						name="PaymentMethod"
						required
						id="PaymentMethod"
						placeholder="Card"
					>
						<option value="card">Card</option>
						<option value="cash">Cash</option>
						<option value="transfer">Transfer</option>
					</select>
				</div>
				<div className="form-box">
					<label htmlFor="CardNumber">Card Number</label>
					<input
						type="number"
						name="CardNumber"
						required
						id="CardNumber"
						placeholder="2345 6543 7868 2343"
					/>
				</div>
				<div className="form-box">
					<label htmlFor="CardName">Card Name</label>
					<input
						type="text"
						name="CardName"
						required
						id="CardName"
						placeholder="TOLUWALASE KENNY OJO"
					/>
				</div>
				<div className="v-divide">
					<div className="form-box">
						<label htmlFor="ExpiryDate">Expiry date</label>
						<input
							type=""
							name="ExpiryDate"
							required
							id="ExpiryDate"
							placeholder="01/23"
						/>
					</div>
					<div className="form-box">
						<label htmlFor="CVC">CVC</label>
						<input
							type="number"
							maxLength={3}
							name="CVC"
							required
							id="CVC"
							placeholder="123"
						/>
					</div>
				</div>

				<div className="pay">
					<button>pay</button>
				</div>
			</form>
		</div>
	);
};

export default Verification;
