import React from 'react';
//import { Link } from 'react-router-dom';

import './menuItem.styles.scss';

const MenuItem = ({ name, linkUrl }) => (
    <div className='menu-item'>
        <Link to={linkUrl}><p>{name}</p></Link>
    </div>
)

export default MenuItem;