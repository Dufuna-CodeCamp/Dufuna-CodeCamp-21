// import { Link } from 'react-router-dom';
// import { CartList } from './CartList';
// import { Delivery } from './Delivery';
// import './css/CartPage.css';

// function CartPage({cartItems, addCart, onRemove, removeMenu, removeAll}) {

//     const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.cost, 0);
//     const deliveryPrice = itemsPrice !== 0 ? 1200 : 0;
//     const totalPrice = itemsPrice + deliveryPrice;    

//     return (
//         <>
//         {/* Breadcrumb */}
//         <ul className='breadcrumb'>
//                 <li className='breadcrumb-item'><Link to=''> Home </Link></li>
//                 <li className='breadcrumb-item'><Link style={{color:"#000000"}} to='/CartPage'>Cart</Link></li>
//         </ul>
    
//         <h2>Cart</h2>

//         <div className='mobile-cart-details' >
//             <span>{cartItems.length} Items</span>
//             {cartItems.length > 0 && <button onClick={() => removeAll(cartItems)} >Remove all</button>}
//         </div>

//         {cartItems.map((cartItem, index) => {            
//             return (            
//                 <CartList cartItem={cartItem} key={index} addCart={addCart} onRemove={onRemove} removeMenu={removeMenu} />
//             )
//         })}   

//         <Delivery price={deliveryPrice} />

//         <div className='checkout'>
//             <div className='total' >
//                 <span>Total</span>
//                 <span>#{totalPrice}</span>
               
//             </div>
//             <span className='checkout-btn' > <Link to='/VerificationPage'> Checkout</Link></span>
//         </div>
//         </>
//     )
// }

// export default CartPage

import React from 'react'

function CartPage() {
    return (
        <div>
            <h2>Cart</h2>
            <span>0</span>
            <img src="./assets/image1.svg" alt="" />
            <img src="./assets/image2.svg" alt="" />
            <button>Checkout</button>
        </div>
    )
}

export default CartPage
