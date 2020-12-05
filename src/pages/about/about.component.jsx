import React from 'react';
import Banner from '../../assets/progressive_img/DSC02981.jpg';
import './about.styles.scss';

const About = () => (
    <div>
        <img className="coming-soon-img" src={Banner} alt="Banner" />
        <div className="coming-soon">
            <p>Coming Soon</p>
        </div>
    </div>
)

export default About;