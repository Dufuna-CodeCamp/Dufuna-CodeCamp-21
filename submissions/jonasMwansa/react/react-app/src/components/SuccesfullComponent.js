
const Success=(props)=>{

    return(
        <div>
            <div className="success-image-container">
                <img src={props.image} alt={props.alt}/>
            </div>
            <br/>
            <div className="success-message">
                <h3>
                    {props.title}
                </h3>
                <p>
                    {props.message}
                </p>
            </div>
        </div>
    )
}

export default Success;