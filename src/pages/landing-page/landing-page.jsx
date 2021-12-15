import React from 'react';
import * as SpotifyAuth from "../../assets/js/spotifyAuth";

const LandingPage = () => {
    const handleChange = (event) => {
        const _token = {...SpotifyAuth.hash.access_token, title: event.target.value};
        if(_token){
            this.setState({token: _token});
        }
    }    

    return (
        <div>
            <button type="submit" onClick={SpotifyAuth.getAuthentication}>Login to Spotify</button>
        </div>
    )
}

export default LandingPage;
