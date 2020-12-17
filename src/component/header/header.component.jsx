import React, { useState, useRef, useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap';
import { Link } from 'react-router-dom';

import Logo from '../../assets/michaelyhz_logo.png';
import MenuItem from '../menuItem/menuItem.component';

import './header.styles.scss';

const menuBarData = {
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
}

const Header = () => {
    const [mobile_menu_button_className, set_mobile_menu_className] = useState("mobile-menu-button");
    const [mobile_menu_button, toggle_mobile_menu] = useState(false);
    let menuButtonItem = useRef(null);

    const mobileMenuExpand = () => {
        set_mobile_menu_className("mobile-menu-button-active")
        TweenMax.to(menuButtonItem, .5, { display: 'flex', opacity: 1, y: 0, ease: Power3.easeIn });
        toggle_mobile_menu(true);
        console.log(mobile_menu_button)
    }

    const mobileMenuShirk = () => {
        set_mobile_menu_className("mobile-menu-button")
        TweenMax.to(menuButtonItem, .5, { display: 'none' ,opacity: 0, y: -150, ease: Power3.easeOut });
        toggle_mobile_menu(false);
        console.log(mobile_menu_button)
    }

    return (
        <div className="header-container">
            <div
                ref={el => menuButtonItem = el}
                className="mobile-menu">
                <div className="mobile-menu-container">
                    <div className="mobile-menu-container-inner">
                        {
                            menuBarData.menuBar.map(
                                ({ id, ...othersProps }) =>
                                    (<MenuItem key={id} {...othersProps} mobile_func={mobileMenuShirk}/>)
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="header-container-inner mainPage-styles">
                <div className="header-container-left">
                    <div 
                    onClick={ mobile_menu_button ? mobileMenuShirk : null}
                    className="menu-icon">
                        <Link to="/"><p id="name-wrap"><span id="name">MY</span></p></Link>
                        {/* <Link to="/"><p id="name-wrap"><img src={Logo} /></p></Link> */}
                    </div>
                </div>
                <div className="header-container-right">
                    <div className="menu">
                        {
                            menuBarData.menuBar.map(
                                ({ id, ...othersProps }) =>
                                    (<MenuItem key={id} {...othersProps}  mobile_func={mobileMenuShirk}/>)
                            )
                        }
                    </div>
                    <div
                        onClick={mobile_menu_button !== true ? mobileMenuExpand : mobileMenuShirk}
                        className={mobile_menu_button_className}>
                        <div className="blackline-1"></div>
                        <div className="blackline-2"></div>
                        <div className="blackline-3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;