import Navigation from "./Navigation";

const Success=(props)=>{

    return(
        <div>
            <Navigation />
            <div className="success-image">
                <img src={props.image} alt={props.alt}/>
            </div>
            
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