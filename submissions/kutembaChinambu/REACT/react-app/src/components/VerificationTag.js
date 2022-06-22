import React from "react";

const VerificationTag = (props) => {
    return (
        <div>
            <section className="pname1">
            <ul className="tag">
                     <li><h2>{props.name}</h2></li>
                     <li id="confirm">{props.confirm}</li>
                 </ul>
                 <ul className="tag">
                     <li><h2>{props.address}</h2></li>
                     <li id="breadcrumb"><img src={props.breadcrumb} alt="breadcrumb" /></li>
                     <li id="address">{props.addressTag}</li>
                 </ul>
            </section>
        </div>
    )
}
export default VerificationTag;