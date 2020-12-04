import React from 'react';
import Banner from '../../assets/DSC02784.jpg';

import './home.styles.scss';

const Home = () => (
    <div className="home">
        <div className="container">
            <img id="banner-img" src={Banner} alt="Banner" />
            <div className="title-description">
                <p className="title"><span>Hello This is Michael Yen</span></p>
                <p className="description"><span>A Fresh Gruduated Computer Engineer</span></p>
            </div>
        </div>
    </div>
)

export default Home;