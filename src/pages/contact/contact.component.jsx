import React, { useRef, useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap';

import Banner from '../../assets/contact_banner.jpg';
import Fb_icon from '../../assets/socialMedia-icon/fb_icon.jpg';
import Ig_icon from '../../assets/socialMedia-icon/ig_icon.jpg';
import Linkedin_icon from '../../assets/socialMedia-icon/linkedin_icon.jpg';
import Whatsapp_icon from '../../assets/socialMedia-icon/whatsapp_icon.png';
import Github_icon from '../../assets/socialMedia-icon/github_icon.webp';

import './contact.styles.scss';

function Contact() {
    let fbItem = useRef(null);
    let igItem = useRef(null);
    let wtpItem = useRef(null);
    let linkedinItem = useRef(null);
    let githubItem = useRef(null);

    useEffect(() => {
        TweenMax.staggerFrom([fbItem, igItem, wtpItem, linkedinItem, githubItem], 1, { opacity: 0, y: 100, ease: Power3.easeOut }, .1)
    }, [])

    return (
        <div className="contact-container">
            <div className="contact-container-inner">
                <div className="contact-container-top">
                    <div className="contact-title">
                        <p>Contact</p>
                    </div>
                </div>
                <div className="contact-container-bottom">
                    <div className="contact-inner-bottom-left">
                        <div className="hanging-picture-container">
                            <img className="coming-soon-img" src={Banner} alt="Banner" />
                        </div>
                    </div>
                    <div className="contact-inner-bottom-right">
                        <div className="socialMedia-container">
                            <div
                                ref={el => { fbItem = el }}
                                className="socialMedia-container-inner">
                                <a href="https://www.facebook.com/michael.yen.71/" target="_blank" rel="noopener noreferrer">
                                    <img src={Fb_icon} alt="Fb_icon" />
                                </a>
                            </div>
                            <div
                                ref={el => { igItem = el }}
                                className="socialMedia-container-inner">
                                <a href="https://www.instagram.com/michael__yen/" target="_blank" rel="noopener noreferrer">
                                    <img src={Ig_icon} alt="Ig_icon" />
                                </a>
                            </div>
                            <div
                                ref={el => { wtpItem = el }}
                                className="socialMedia-container-inner">
                                <a href="https://wa.me/92005922" target="_blank" rel="noopener noreferrer">
                                    <img src={Whatsapp_icon} alt="Whatsapp_icon" />
                                </a>
                            </div>
                            <div
                                ref={el => { linkedinItem = el }}
                                className="socialMedia-container-inner">
                                <a href="https://www.linkedin.com/in/yen-michael-3ba255176/" target="_blank" rel="noopener noreferrer">
                                    <img src={Linkedin_icon} alt="Linkedin_icon" />
                                </a>
                            </div>
                            <div
                                ref={el => { githubItem = el }}
                                className="socialMedia-container-inner">
                                <a href="https://github.com/hzyen" target="_blank" rel="noopener noreferrer">
                                    <img src={Github_icon} alt="Github_icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-footer">
                <p>© 2020 Michael Yen. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Contact;