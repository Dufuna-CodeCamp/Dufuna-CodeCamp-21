import React from "react";

const CartItem = (props) => {
    return (
        <div className="cart-item flex">
            <img className="close-icon" src="./images/close_icon.svg" alt="remove icons"/>
            <div className="cart-details flex">
                <div className="flex">
                    <img className="product-image" src={props.image} alt={props.name}/>

                    <div>
                        <p className="p-name fs-md poppins-semibold">{props.name}</p>
                        <div className="flex">
                            <img id={props.id} className="increment-img" src="./images/plus.svg" onClick={props.increaseQuantity} alt="Increase quantity"/>
                            <p className="p-quantity poppins-medium fs-md" style={{color:'#AD4C4C'}}>{props.quantity}</p>
                            <img id={props.id} className="increment-img" src="./images/minus.svg" onClick={props.decreaseQuantity} alt="decrease quantity"/>
                        </div>
                    </div>
                </div>
                <div>                        
                    <p className="fs-lg poppins-medium">#{props.price}</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem;