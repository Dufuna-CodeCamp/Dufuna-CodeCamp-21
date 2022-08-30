import NavBar from "./Navbar"
import Success from "../asserts/images/success.svg"
import '../App.css'

const OrderSuccess = ()=>{
    return(
        <main>
            <NavBar/>
            <div className="success-section">
                <div className="sucess-section-img">
                    <img className="success-img" src={Success} alt="success" />
                </div>
                <div>
                    <p className="main-title">Order Successful</p>
                    <p className="main-description">
                    We have started processing your order.
                    </p>
                </div>
            </div>
        </main>
       
    )
}

export default OrderSuccess;