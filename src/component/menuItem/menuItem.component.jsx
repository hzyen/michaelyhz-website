import React from 'react';
import { Link } from 'react-router-dom';

import './menuItem.styles.scss';

const MenuItem = ({ name, linkUrl, mobile_func }) => (
    <div className='menu-item-container mobile-menu-item-container'>
        <div 
        onClick={mobile_func}
        className="menu-item-inner mobile-menu-item-inner">
            <Link className="menu-item mobile-menu-item" to={linkUrl}><p>{name}</p></Link>
        </div>
    </div>
)

export default MenuItem;