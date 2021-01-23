import React from 'react';
import "./Mainboard.css";
import Pin from "./Pin.js";

function Mainboard(props) {
    return (
        <div className="mainboard">
            {/* array of Pinterest = props
            map through Pin
            and with every pin- use Pin components */}
            <Pin />
            
        </div>
    )
}

export default Mainboard;
