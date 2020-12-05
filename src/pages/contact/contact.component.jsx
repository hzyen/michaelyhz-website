import React from 'react';
import Banner from '../../assets/progressive_img/DSC02981_1.jpg';
import './contact.styles.scss';

const Contact = () => (
    <div className="coming-soon-container contact-container">
        <img className="coming-soon-img" src={Banner} alt="Banner" />
        <div className="coming-soon container-inner">
            <p>Coming Soon</p>
        </div>
    </div>
)

export default Contact;