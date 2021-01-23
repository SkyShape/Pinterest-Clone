import React from 'react';
import "./Pin.css";

function Pin() {
    let sizePin = "medium";

    return (
        <div className="pin">
            <div className="pin_container">
                {/* posibility to use a variable to change dimension of the  container */}
                <div className={`pin_container ${sizePin}`}>
                    <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="pin"/>
                </div>
            </div>
        </div>
    )
}

export default Pin;
