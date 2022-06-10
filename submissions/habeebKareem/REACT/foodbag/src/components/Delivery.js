import './css/Delivery.css'

export const Delivery = ({price}) => {
    return (
        <div>
            <div className='cart-item'>
                <img className='cart-img' src="./assets/scooter 1.svg" alt="" />
                <span className='delivery'>Delivery fee</span>
            <span className='price'>#{price}</span>
        </div>
        <hr />
            
        </div>
    )
}
