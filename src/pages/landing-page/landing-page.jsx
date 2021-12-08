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
            <h1><a href={SpotifyAuth.url}>Login to Spotify</a></h1>
        </div>
    )
}

export default LandingPage;
