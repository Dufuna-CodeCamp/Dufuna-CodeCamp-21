import './css/OrderSuccessful.css';

function OrderSuccessful() {
    return (
        <div className='successful-order' >
            <img className='successful-img' src="./assets/Success _Two Color 1.svg" alt="successful" />

            <div className='successful-text' >
            <p>Order successful</p>
            <p>We have started processing your order.</p>
            </div>            
        </div>
    )
}

export default OrderSuccessful
