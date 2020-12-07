import React from 'react';

import './customButton.styles.scss';

const CustomButton = ({ name }) => (
    <div className="explore-container">
        <div className="explore-container-inner">
            <span>{name}</span>
        </div>
    </div>
)

export default CustomButton;