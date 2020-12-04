import React from 'react';
<<<<<<< HEAD

import Banner from '../../assets/DSC02784.jpg';
=======
import Banner from '../../assets/DSC02784_2.jpg';
>>>>>>> 897f4447b4c575e62997d1aaf8def5f2c34d7525


import './home.styles.scss';

const Home = () => (
    <div className="home">
        <div className="home-container">
            <img src={Banner} alt="Banner" />
            <div className="title-description">
                <p className="title"><span>Hello This is Michael Yen</span></p>
                <p className="description"><span>A Fresh Gruduated Computer Engineer</span></p>
            </div>
        </div>
    </div>
)

export default Home;