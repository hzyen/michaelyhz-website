import React from 'react';
//import { Link } from 'react-router-dom';

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
                        "name": "Gallery",
                        "linkUrl": "/gallery",
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
                <div className="menu-icon">
                    <p id="name-wrap"><span id="name">MY</span></p>
                </div>
                <div className="menu">
                    {
                        menuBarData.menuBar.map(
                            ({ id, ...othersProps }) =>
                                (<MenuItem key={id} {...othersProps} />)
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Header;