import React from 'react';

import DATA from '../../data/about_data.json';
import Icon from '../../assets/DSC03037.jpg';

import './about.styles.scss';

const About = () => {
    const about_me = DATA.about_me;
    const bio = DATA.bio;
    const education = DATA.education;
    const work_experience = DATA.work_experience;
    const activities = DATA.activities;
    const certications = DATA.certifications;
    const skills = DATA.skills;

    return (
        <div className="about-container">
            <div className="about-container-inner">
                <div className="album-box about-topleft-box">
                    <div className="album-box-inner">
                        <div className="album-box-inner-title">
                            <span>About me</span>
                        </div>
                        <div className="album-box-inner-content">
                            <div className="album-box-inner-content-top">
                                <div className="album-box-inner-content-top-left">
                                    <img src={Icon} alt="Icon" />
                                </div>
                                <div className="album-box-inner-content-top-right">
                                    <p><span id="title">Name:</span> {about_me.chinese_name} {about_me.english_name}</p>
                                    <p><span id="title">Nickname:</span> {about_me.nickname}</p>
                                    <p><span id="title">Location:</span> {about_me.live}</p>
                                    <p><span id="title">Phone:</span> {about_me.phone}</p>
                                    <p><span id="title">Email:</span> {about_me.email}</p>
                                </div>
                            </div>
                            <p id="title">Bio</p>
                            <div className="album-box-inner-content-bottom">
                                <p>{bio}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="album-box about-bottomleft-box">
                    <div className="album-box-inner">
                        <div className="album-box-inner-title">
                            <span>Education</span>
                        </div>
                        <div className="album-box-inner-content">
                            content
                        </div>
                    </div>
                </div>
                <div className="album-box about-middleup-box">
                    <div className="album-box-inner">
                        <div className="album-box-inner-title">
                            <span>Experience</span>
                        </div>
                        <div className="album-box-inner-content">
                            content
                        </div>
                    </div>
                </div>
                <div className="album-box about-middledown-box">
                    <div className="album-box-inner">
                        <div className="album-box-inner-title">
                            <span>Certifications</span>
                        </div>
                        <div className="album-box-inner-content">
                            content
                        </div>
                    </div>
                </div>
                <div className="album-box about-right-box">
                    <div className="album-box-inner">
                        <div className="album-box-inner-title">
                            <span>Skills</span>
                        </div>
                        <div className="album-box-inner-content">
                            content
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;