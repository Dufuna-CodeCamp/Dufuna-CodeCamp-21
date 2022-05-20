import React from "react";

const PageName = (props) => {
    return (
        <div>
             <section className="pname">
                <h2>{props.name}</h2>
                <ul id="mobile">
                    <li id="remove"><h3>{props.remove}</h3></li>
                    <li><h3>{props.quantity} items</h3></li>
                </ul>
                    
             </section>
            

        </div>
    )
}
export default PageName;