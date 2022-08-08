import Cancel from '../asserts/icons/cancel.png'
import NavBar from "./Navbar";
import Button from "./Button";
import Plus from '../asserts/icons/plus.svg'
import Minus from '../asserts/icons/Minus.svg'
import Scooter from '../asserts/images/scooter 1.svg'
import { useNavigate } from 'react-router-dom';

const Cart = ({products, onAdd, onRemove})=>{
    const total = 0;
    const deliveryFee = 1200;
    const navigate = useNavigate();
    return(
        <main>
            <NavBar/>
            <section className="page-nav">
                <p>Home &gt;&nbsp;</p>
                <p className="py-dark">Cart</p>
            </section>
            <section className='cart-item-section'>
                <p className='cart-title'>Cart</p>
                {products.map((product)=>{
                return(
                    <section className='cart'>
                        <div className='border'>
                            <img className='small' src={Cancel} alt="" />
                        </div>
                        <div className='cart-item border'>
                            <div>
                                <img className="cart-item-img"src={product.img} alt="" />
                            </div>
                            <div>
                                <p className='item-name'>{product.name}</p>
                                <div className='item-change-qty'>
                                    <div>
                                        <button className='btn-small'><img className='img-plus' src={Plus} alt="" /></button>
                                    </div>
                                    
                                    <span className='qty'>{product.quantity}</span>
                                    <div>
                                        <button className='btn-small'><img className='img-minus' src={Minus} alt="" /></button>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='item-price'>
                                <p className='item-price'>&#8358;{product.price}</p>
                            </div>
                        </div>
                    </section>
            )})}
                <section className='cart'>
                    <div className='indent'>
                        
                    </div>
                    <div className='cart-item border'>
                        <div>
                            <img src={Scooter} alt="" />
                        </div>
                        <div>
                            <p className='item-name center-delivery-fee'>Delivery fee</p>
                        </div>
                        <div className='item-price'>
                            <p>&#8358;{deliveryFee}</p>
                        </div>
                    </div>
                </section>
            </section>
            
            <Button name={"Checkout"}/>
        </main>
    )
}

export default Cart;