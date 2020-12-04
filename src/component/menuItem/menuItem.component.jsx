import React from 'react';
//import { Link } from 'react-router-dom';

import './menuItem.styles.scss';

const MenuItem = ({ name, linkUrl }) => (
    <div className='menuItem'>
        <p>{name}</p>
    </div>
)

export default MenuItem;