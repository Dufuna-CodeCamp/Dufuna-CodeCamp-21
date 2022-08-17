import React from 'react';

const Pay = (props) => {
    return (
        <div id='pay'>
            <button onClick={props.onButtonClick}>Pay</button>
        </div>
    );
}

export default Pay;