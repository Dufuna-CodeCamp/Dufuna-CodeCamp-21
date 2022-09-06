const Input = (props)=>{
    return(
        <div className="fieldClassName">
            <label htmlFor={props.name}> 
                <p className="form-label">{props.name}</p>
                <div className="input-wrapper">
                    <input type={props.type} value="" placeholder={props.placeholder} className={props.className} onChange={props.handleChange}/>
                </div>
            </label>
        </div>
    )
}

export default Input;