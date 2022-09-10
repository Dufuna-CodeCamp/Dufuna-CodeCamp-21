import React, {useState, useEffect} from 'react';
import Button from "../../button/Button";
import './cart.css';
import data from '../../../data'; 
import Plus from '../../../assets/plus.svg';
import Minus from '../../../assets/Minus.svg';
import './cart.css';
import Breadcrumb from '../../breadcrumb/Breadcrumb';
import Checkout from '../../checkout/Checkout';
import Close from '../../../assets/close.svg';
import Delivery from '../../delivery/Delivery';


function Cart() {

    // intializing the the Total Price trcking Varible (*** done)
    let totalPriceTrack = 0;
    
    // create the initial state of the cart and set it to an empty array (*** done)
    const [cart, setCart] = useState ([]);
    useEffect (()=> {
        setCart (data);
    },[]);

    // first get the item (*** done)
    // create functions [increament, decreament] / update quanitity (*** done)
    function increament (product) {
        if (isProductAvailable (product.id) ) {
            const newCart = cart.map ((item) => {
                let quantity = item.quantity;
                let price = item.price;
                if (item.id === product.id && item.quantity >= 1) {
                    quantity ++;
                    price = pricer(item.id) * quantity;
                }

                return {
                    ...item,
                    quantity,
                    price,
                }
            });
            setCart (newCart);
            trackCartTotalPrice ();
        }else {
            alert ("The Item is Out Of Stoke!")
        }
    } 
    function decreament (product) {
        if (isProductAvailable (product.id) ) {
            const newCart = cart.map ((item) => {
                let quantity = item.quantity;
                let currentPrice = item.price;
                let price = item.price;
                if (item.id === product.id && item.quantity > 1) {
                    quantity --;
                    price = currentPrice - pricer(item.id);
                }
                return {
                    ...item,
                    quantity,
                    price,
                }
            });
            
            setCart (newCart);
            trackCartTotalPrice ();
        }else {
            alert ("The Item is Out Of Stoke!")
        }
    }
    
    // check for the existance of the item (*** done)
    function isProductAvailable (id) {
        if (cart.some((item) => item.id === id)) {
            return true;
        }
        
    }

    function pricer (id) {
        let obj = {};
        for (let i = 0; data.length > i; i ++ ) {
            if (data[i].id === id) {
                obj = data[i];
            }
        }

        return obj.price;
    }

    // update the entire cart price ADD ALL PRICES
    function trackCartTotalPrice () {
        let price = 1200;
        for(let i = 0; i < cart.length; i++) {
            price += cart[i].price;
        }
        totalPriceTrack = price;
        return totalPriceTrack;
    }

    trackCartTotalPrice ();
    

    return (
        <div className="cart">
            <Breadcrumb />
            <h2 className="heading">Cart</h2>
            {
                cart.map(item => (
                    <div className="cart-item" key={item.id}>
                        <span className='remove-cartItem'>
                            <img src={Close} alt='remove item'/>
                        </span>
                            <div className='item-image' >
                                <img src={item.product} alt="product" />
                            </div>
                        <div className="info">

                            <h3 className='item-name'>{item.title}</h3>

                            <div className='counter'>
                                <Button 
                                    type="button" 
                                    class="quantity_counter" 
                                    id="add-btn" 
                                    value={<img src={Plus} alt='plus' />} 
                                    handleOnClick={() => increament (item)}/>
                                <h3>{item.quantity}</h3>
                                <Button 
                                    type="button"
                                    class="quantity_counter" 
                                    id="sub-btn" 
                                    value={<img src={Minus} alt='Minus' />} 
                                    handleOnClick={() => decreament (item)}/>
                            </div>


                        </div>
                        
                        <h3 className="price">#{item.price}</h3>
                        
                    </div>
                ))
            }
            <Delivery />        
            <div className="bottom-nav">
                <div className='total'>
                    <h1>Total</h1>
                    <h1>#{totalPriceTrack}</h1>
                </div>
                <div className='checkout-cont'>
                    <Checkout />
                </div>
            </div>
        </div>
    );
}

export default Cart;