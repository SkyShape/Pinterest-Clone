import React from 'react';
import "./Header.css";
import PinterestIcon from '@material-ui/icons/Pinterest';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="app_header">
            <div className="header_wrapper">
                    <div className="header_logo">
                        <PinterestIcon />
                    </div>

                    <div className="header_button homePage">
                        <p>HomePage</p>
                    </div>

                    <div className="header_button followig">
                        <p>Following</p>
                    </div>

                    <div className="header_search">
                        <div className="header_searchContainer">
                            <SearchIcon />
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


