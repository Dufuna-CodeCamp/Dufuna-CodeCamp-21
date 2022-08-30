const Select = (props)=>{
    return(
        <div className="fieldClassName">
            <label htmlFor=""> {props.name}
                <div className="input-wrapper">
                <select className="" onClick={props.onClick}>
                    {props.options}
                </select>
                </div>
            </label>
        </div>
    )
}

export default Select;