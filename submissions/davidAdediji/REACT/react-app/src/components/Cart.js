import CartItems from "./CartItems";
import NavBar from "./Navbar";

const Cart = ({products})=>{
    return(
        <main>
            <NavBar/>
            <section className="page-nav">
                <p>Home &gt;&nbsp;</p>
                <p className="py-dark">Cart</p>
            </section>
            <CartItems products={products}/>
            <div className="checkout-section">
                <button className="checkout-btn" type="submit">
                    Checkout
                </button>
            </div>
        </main>
    )
}

export default Cart;