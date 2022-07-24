const Input = (props)=>{

    return(
        <div className="input-feild">
            <label htmlFor={props.label}>
                {props.label_value}
                </label><br/>
            <input 
                id={props.id}
                type={props.type}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.handleChange}
                />
        </div>
    )
}

export default Input;