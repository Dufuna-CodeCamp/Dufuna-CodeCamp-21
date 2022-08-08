import Cancel from '../asserts/icons/cancel.png'
import NavBar from "./Navbar";
import Button from "./Button";

const Cart = ({products, onAdd})=>{
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
                                <img src={product.img} alt="" />
                            </div>
                            <div>
                                Text
                            </div>
                            <div className='item-price'>
                                <p>{product.price}</p>
                            </div>
                        </div>
                    </section>
            )})}
                <section className='cart'>
                    <div className='border'>
                        <img className='small' src={Cancel} alt="" />
                    </div>
                    <div className='cart-item border'>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            Text
                        </div>
                        <div className='item-price'>
                            <p></p>
                        </div>
                    </div>
                </section>
            </section>
            
            <Button name={"Checkout"}/>
        </main>
    )
}

export default Cart;