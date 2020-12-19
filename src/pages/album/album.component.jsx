import React, { useState, useEffect } from 'react';

import './album.styles.scss';

const Album = () => {
    const [igAuthToken, setIgAuthToken] = useState(null);

    useEffect(() => {
        const fetchIgAuthToken = async () => {
            const response = await fetch(`https://graph.instagram.com/access_token
            ?grant_type=ig_exchange_token
            &client_secret={instagram-app-secret}
            &access_token={short-lived-access-token}`);
        }
    });

    return (
        <div className="album-container">

        </div>
    );
}

export default Album;