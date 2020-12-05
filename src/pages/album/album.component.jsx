import React from 'react';
import Banner from '../../assets/progressive_img/DSC02981_1.jpg';
import './album.styles.scss';

const Album = () => (
    <div className="coming-soon-container">
        <img className="coming-soon-img" src={Banner} alt="Banner" />
        <div className="coming-soon">
            <p>Coming Soon</p>
        </div>
    </div>
)

export default Album;