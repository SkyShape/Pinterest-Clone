import React from 'react';
import "./Header.css";

function Header() {
    return (
        <div className="app_header">
            <div className="header_wrapper">
                    <div className="header_logo">
                        <p>Logo</p>
                    </div>

                    <div className="header_button homePage">
                        <p>HomePage</p>
                    </div>

                    <div className="header_button followig">
                        <p>Following</p>
                    </div>

                    <div className="header_search">
                        <div className="header_searchContainer">
                            <p>SearchIcon</p>
                            <input type="text"/>
                            <button>Submit</button>
                        </div>
                    </div>

                    <div className="header_menuItems">
                        <p>icon</p>
                        <p>icon</p>
                        <p>icon</p>
                        <p>icon</p>
                    </div>
            </div>
        </div>
    )
}

export default Header


