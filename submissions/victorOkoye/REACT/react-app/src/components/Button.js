

const Button = (props) => {
    return(
        <button className={props.className} style={{backgroundColor: props.backgroundColor, color: props.color, padding: props.padding, fontSize: props.fontSize}} onClick={props.handleChange}>{props.name}</button>
    )
}

export default Button;