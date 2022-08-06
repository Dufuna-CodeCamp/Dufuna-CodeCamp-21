import '../App.css'
const CartItems = ({products})=>{
    return(
        <section className='cart-item-section'>
            <p className='cart-title'>Cart</p>
            {products.map((product) =>(
                <div key={product.id}>{product.name}</div>
            ))}
        </section>
    )
}

export default CartItems;