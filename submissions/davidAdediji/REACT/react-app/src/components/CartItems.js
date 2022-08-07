import '../App.css';
import Cancel from '../asserts/icons/cancel.png';

const CartItems = ({product})=>{
    return(
        <section className='cart-item-section'>
            <div>
                <img className='small' src={Cancel} alt="" />
            </div>
            <div className='cart-item'>
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

    )
}

export default CartItems;