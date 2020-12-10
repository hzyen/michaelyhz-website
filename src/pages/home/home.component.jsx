import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TweenMax, Power3 } from 'gsap';

import Banner from '../../assets/progressive_img/DSC02784.jpg';

import CustomBottom from '../../component/customButton/customButton.component';

import About from '../about/about.component';


import './home.styles.scss';

function Home() {
    let titleItem = useRef(null);
    let descriptionItem = useRef(null);
    let titleDescriptionItem = useRef(null);
    let exploreButton = useRef(null);

    useEffect(() => {
        TweenMax.to(titleDescriptionItem, 0, { css: { visibility: 'visible' } })
        TweenMax.staggerFrom([titleItem, descriptionItem], 1, { opacity: 0, y: 100, ease: Power3.easeOut }, .1)
        TweenMax.from(exploreButton, 1, { opacity: 0, y: -50, ease: Power3.easeOut })
    }, [])


    return (
        <div className="home">
            <div className="home-container">
                <img src={Banner} alt="Banner" />
                <div className="content-container">
                    <div
                        ref={el => { titleDescriptionItem = el }}
                        className="title-description">
                        <p
                            ref={el => { titleItem = el }}
                            className="title"><span>Hello This is Michael Yen</span></p>
                        <p
                            ref={el => { descriptionItem = el }}
                            className="description"><span>A Fresh Gruduated Computer Engineer</span></p>
                    </div>
                    <div
                        ref={el => { exploreButton = el }}
                        className="explore-wrap">
                        <Link to="/about">
                            <CustomBottom name="Explore" />
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home;