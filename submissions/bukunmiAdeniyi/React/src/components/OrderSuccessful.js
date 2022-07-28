import './css/OrderSuccessful.css';

function OrderSuccessful() {
    return (
        <div className='successful-order' >
            <img className='successful-img' src="./assets/Success _Two Color 1.svg" alt="successful" />

            <div className='successful-text' >
            <p>Order successful</p>
            <h5>We have started processing your order.</h5>
            </div>            
        </div>
    )
}

export default OrderSuccessful
