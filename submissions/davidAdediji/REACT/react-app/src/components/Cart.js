import CartItems from "./CartItems";
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
                        <CartItems key={product.id} product={product} onAdd={onAdd}/>
                    )})}
            </section>
            
            <Button name={"Checkout"}/>
        </main>
    )
}

export default Cart;