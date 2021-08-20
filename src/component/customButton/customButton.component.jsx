import React from 'react';
import { Link } from 'react-router-dom';

import './customButton.styles.scss';

const CustomButton = ({ name, linkTo = "" }) => (
    linkTo === "" ?

        <div className="explore-container">
            <div className="explore-container-inner">
                <span>{name}</span>
            </div>
        </div>
        :
        <Link to={linkTo}>
            <div className="explore-container">
                <div className="explore-container-inner">
                    <span>{name}</span>
                </div>
            </div>
        </Link>
)

export default CustomButton;