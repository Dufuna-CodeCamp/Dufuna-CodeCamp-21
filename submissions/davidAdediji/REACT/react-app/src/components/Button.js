import '../App.css'

const Button = (props)=>{
    return(
        <div className='checkout-section'>
            <button className="checkout-btn" type="submit">
                {props.name}
            </button>
        </div>
        
    )
}

export default Button;