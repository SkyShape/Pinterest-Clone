import React from 'react';
import "./Mainboard.css";
import Pin from "./Pin.js";



function Mainboard(props) {
    
    let {pins} = props;
    return (
        <div className="mainboard">
            {/* array of Pinterest = props
            map through Pin
            and with every pin- use Pin components */}
            {pins.map((pin) => {
                let { urls } = pin;
                return <Pin urls={urls}/>;
            })}
            
        </div>
    );
}

export default Mainboard;
