import React from 'react';
import "./Pin.css";

function Pin(props) {
    let sizePin = "medium";

    let {urls} = props;

    return (
        <div className="pin">
            <div className="pin_container">
                {/* posibility to use a variable to change dimension of the  container */}
                <div className={`pin_container ${sizePin}`}>
                    <img src={urls?.regular} alt="pin"/>
                </div>
            </div>
        </div>
    )
}

export default Pin;
