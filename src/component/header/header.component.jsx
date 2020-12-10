import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/michaelyhz_logo.png';
import MenuItem from '../menuItem/menuItem.component';

import './header.styles.scss';

class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            menuBarData: {
                "menuBar": [
                    {
                        "id": 1,
                        "name": "Home",
                        "linkUrl": "/",
                    },
                    {
                        "id": 2,
                        "name": "About",
                        "linkUrl": "/about",
                    },
                    {
                        "id": 3,
                        "name": "Project",
                        "linkUrl": "/project",
                    },
                    {
                        "id": 4,
                        "name": "Album",
                        "linkUrl": "/album",
                    },
                    {
                        "id": 5,
                        "name": "Contact",
                        "linkUrl": "/contact",
                    }
                ]
            },
        }
    }

    render() {
        const { menuBarData } = this.state;
        return (
            <div className="header-container">
                <div className="header-container-inner mainPage-styles">
                    <div className="header-container-left">
                        <div className="menu-icon">
                            <Link to="/"><p id="name-wrap"><span id="name">MY</span></p></Link>
                            {/* <Link to="/"><p id="name-wrap"><img src={Logo} /></p></Link> */}
                        </div>
                    </div>
                    <div className="header-container-right">
                        <div className="menu">
                            {
                                menuBarData.menuBar.map(
                                    ({ id, ...othersProps }) =>
                                        (<MenuItem key={id} {...othersProps} />)
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;