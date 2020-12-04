import React from 'react';
import Banner from '../../assets/DSC02981.jpg';
import './album.styles.scss';

const Album = () => (
    <div>
        <img src={Banner} alt="Banner" />
        <div className="coming-soon">
            <p>Coming Soon</p>
        </div>
    </div>
)

export default Album;