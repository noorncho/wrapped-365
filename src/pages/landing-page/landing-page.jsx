import React from 'react';
import * as SpotifyAuth from "../../assets/js/spotifyAuth";

const LandingPage = () => {

    return (
        <div>
            <button type="submit" onClick={SpotifyAuth.getAuthentication}>Login to Spotify</button>
        </div>
    )
}

export default LandingPage;
