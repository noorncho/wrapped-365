import React from 'react';
//import * as SpotifyAuth from "../../assets/js/spotifyAuth";
import * as SpotifyAuth from "../../spotifyAuth";

const LandingPage = () => {
    //const {REACT_APP_CLIENT_ID, REACT_APP_AUTH_ENDPOINT, REACT_APP_REDIRECT_URL} = process.env;
    require('dotenv').config();
    
    /*const scope = [
        'user-top-read',
        'user-follow-read',
        'user-read-recently-played',
        'user-read-currently-playing',
        'streaming'
    ];

    const getAuthentication = () =>{
        let url = process.env.REACT_APP_AUTH_ENDPOINT;
        url += '?client_id=' + process.env.REACT_APP_CLIENT_ID;
        url += '&redirect_uri=' + process.env.REACT_APP_REDIRECT_URL;
        url += '&scope=' + scope.join("%20");
        url += "&response_type=token";
        url += "&show_dialog=true";
    
        window.location.href = url;
    }*/

    return (
        <div>
            <button type="submit" onClick={SpotifyAuth.getAuthentication}>Login to Spotify</button>
        </div>
    )
}

export default LandingPage;
