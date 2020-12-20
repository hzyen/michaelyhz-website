import React, { useRef, useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap';

import DATA from '../../data/about_data.json';
import Icon from '../../assets/DSC03037.jpg';

import './about.styles.scss';

const About = () => {
    const about_me = DATA.about_me;
    const bio = DATA.bio;
    const education = DATA.education;
    const work_experience = DATA.work_experience;
    //const activities = DATA.activities;
    //const certications = DATA.certifications;
    const skills = DATA.skills;

    let topleftItem = useRef(null);
    let bottomleftItem = useRef(null);
    let middletopItem = useRef(null);
    let middlebottomItem = useRef(null);
    let rightItem = useRef(null);

    useEffect(() => {
        TweenMax.staggerFrom([topleftItem, middletopItem], 1, { opacity: 0, y: -150, ease: Power3.easeOut }, 0.1);
        TweenMax.staggerFrom([bottomleftItem, middlebottomItem], 1, { opacity: 0, y: 150, ease: Power3.easeOut }, 0.1);
        TweenMax.from(rightItem, 1, { opacity: 0, x: 150, ease: Power3.easeOut, delay: 0.1 })

    }, [])


    return (
        <div className="about-container">
            <div className="about-container-inner">
                <div
                    ref={el => { topleftItem = el }}
                    className="about-box about-topleft-box">
                    <div className="about-box-inner">
                        <div className="about-box-inner-title">
                            <span>About me</span>
                        </div>
                        <div className="about-box-inner-content">
                            <div className="about-box-inner-content-top">
                                <div className="about-box-inner-content-top-left">
                                    <img src={Icon} alt="Icon" />
                                </div>
                                <div className="about-box-inner-content-top-right">
                                    <p><span id="title">Name:</span> {about_me.chinese_name} {about_me.english_name}</p>
                                    <p><span id="title">Nickname:</span> {about_me.nickname}</p>
                                    <p><span id="title">Location:</span> {about_me.live}</p>
                                    <p><span id="title">Phone:</span> {about_me.phone}</p>
                                    <p><span id="title">Email:</span> {about_me.email}</p>
                                </div>
                            </div>
                            <div className="about-box-inner-content-bottom">
                                <p id="title">Bio</p>
                                <p>{bio}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    ref={el => { bottomleftItem = el }}
                    className="about-box about-bottomleft-box">
                    <div className="about-box-inner">
                        <div className="about-box-inner-title">
                            <span>Education</span>
                        </div>
                        <div className="about-box-inner-content">
                            {
                                education.map(({ school, from, to, program, awards, courses, logo }) => (
                                    <div className="about-box-inner-content-education">
                                        <p><span id="title" style={{ fontSize: "14px" }}>{school}</span></p>
                                        <p><span id="title">Period:</span> <span>{from}</span>-<span>{to}</span></p>
                                        {
                                            program ? <p><span id="title">Program:</span> {program}</p> : null
                                        }
                                        {
                                            awards.length > 0 ? awards.map((item) => (<p><span id="title">Awards:</span> {item}</p>)) : null
                                        }
                                        {
                                            courses.length > 0 ? courses.map((item) => (<p><span id="title">Courses:</span> {item}</p>)) : null
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div
                    ref={el => { middletopItem = el }}
                    className="about-box about-middleup-box">
                    <div className="about-box-inner">
                        <div className="about-box-inner-title">
                            <span>Experience</span>
                        </div>
                        <div className="about-box-inner-content">
                            {
                                work_experience.map(({ company_name, post, type, from, to, desciptions }) => (
                                    <div className="about-box-inner-content-experience">
                                        <p><span id="title" style={{ fontSize: "14px" }}>{company_name}</span></p>
                                        <p><span id="title">Post:</span> {post}</p>
                                        <p><span id="title">Type:</span> {type}</p>
                                        <p><span id="title">Period:</span> <span>{from}</span>-<span>{to}</span></p>
                                        <p><span id="title">Descriptions</span></p>
                                        {
                                            desciptions.map((item, index) => (
                                                <p>{index + 1}. {item}</p>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div
                    ref={el => { middlebottomItem = el }}
                    className="about-box about-middledown-box">
                    <div className="about-box-inner">
                        <div className="about-box-inner-title">
                            <span>Certifications</span>
                        </div>
                        <div className="about-box-inner-content">

                        </div>
                    </div>
                </div>
                <div
                    ref={el => { rightItem = el }}
                    className="about-box about-right-box">
                    <div className="about-box-inner">
                        <div className="about-box-inner-content-s">
                            <div className="about-box-inner-title">
                                <span>Languages</span>
                            </div>
                            {
                                about_me.Languages.map(({ name, level }) => (
                                    <div className="about-box-inner-content-skills">
                                        <p>{name}</p>
                                        <div className="levelbar-container">
                                            <div className="levelbar-container-inner-language" style={{ width: level }}></div>
                                        </div>
                                    </div>
                                ))
                            }

                            <div className="about-box-inner-title">
                                <span>Skills</span>
                            </div>
                            {
                                skills.map(({ name, level }) => (
                                    <div className="about-box-inner-content-skills">
                                        <p>{name}</p>
                                        <div className="levelbar-container">
                                            <div className="levelbar-container-inner-skills" style={{ width: level }}></div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;