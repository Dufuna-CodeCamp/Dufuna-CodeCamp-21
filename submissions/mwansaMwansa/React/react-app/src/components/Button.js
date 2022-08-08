const Button = ({button_id, button_value, type, link,handleOnClick}) => {

    return (

        <div className='button-class'>
           <button id= {button_id} type={type} onClick={handleOnClick}>
                <a href={link}>{button_value}</a>
           </button>
        </div>
    )
}
 
export default Button;