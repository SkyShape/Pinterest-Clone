import React from 'react';
import "./Header.css";
import IconButton from '@material-ui/core/IconButton';
import PinterestIcon from '@material-ui/icons/Pinterest';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TextsmsIcon from '@material-ui/icons/Textsms';
import FaceIcon from '@material-ui/icons/Face';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Header() {
    return (
            <div className="header_wrapper">
                    <div className="header_logo">
                        <IconButton>
                            <PinterestIcon />
                        </IconButton>
                    </div>

                    <div className="header_button homePage">
                        <a href="/">HomePage</a>
                    </div>

                    <div className="header_button followig">
                        <a href="/">Following</a>
                    </div>

                    <div className="header_search">
                        <div className="header_searchContainer">
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                            <form>
                                <input type="text"/>
                                <button>Submit</button>                                
                            </form>

                        </div>
                    </div>

                    <div className="header_menuItems">
                        <IconButton>
                            <NotificationsIcon />
                        </IconButton>
                        <IconButton>
                            <TextsmsIcon />
                        </IconButton>
                        <IconButton>
                            <FaceIcon />
                        </IconButton>
                        <IconButton>
                            <ExpandMoreIcon />
                        </IconButton>
                    </div>
            </div>
    )
}

export default Header


