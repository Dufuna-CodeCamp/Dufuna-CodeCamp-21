import * as React from 'react';

export const CartPage = () => {
    return (
        <div className="cart-page">
            <h2>Cart</h2>
            <div className="cart-page__counter">
                <span>0</span>
                <span>items</span>
            </div>
            <div className="cart-page__items">
                <img src="https://via.placeholder.com/150" alt="placeholder" />
                <img src="https://via.placeholder.com/150" alt="placeholder" />
            </div>
            <button>Checkout</button>
        </div>
    );
}