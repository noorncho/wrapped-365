import React, {useEffect, useState} from 'react';
import hash from '../../assets/js/hash';
import { Navigate } from "react-router-dom";

const RedirectPage = () => {
    const[topArtistsData, setTopArtistsData] = useState({});
    const[topSongsData, setTopSongsData] = useState({});
    //const navigate = useNavigate();

    const _token = hash.access_token;
    console.log(_token);
    localStorage.setItem('params', JSON.stringify(_token));
    
    const getTopArtists = () =>{
        fetch("https://api.spotify.com/v1/me/top/artists", {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application-type',
                'Authorization': `Bearer ${_token}`,   
                'Host': 'api.spotify.com'
            }
        })
        .then(response => response.json())
        .then(data => setTopArtistsData(data))        
        .then(data => console.log(data))
        .catch(error => console.log(error));
    }
    
    const getTopSongs = () =>{
        fetch("https://api.spotify.com/v1/me/top/tracks", {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application-type',
                'Authorization': `Bearer ${_token}`,
                'Host': 'api.spotify.com'    
            }
        })
        .then(response => response.json())
        .then(data => setTopSongsData(data))
        .catch(error => console.log(error));
    }
    
    useEffect(getTopArtists, [_token]);
    useEffect(getTopSongs, [_token]);
    
    console.log(topSongsData);
    console.log(topArtistsData);

    localStorage.setItem("songsData", JSON.stringify(topSongsData))
    localStorage.setItem("artistsData", JSON.stringify(topArtistsData))

    return (
        <>
            <h1> Redirect Page </h1>
            {<Navigate to="/dashboard" />}
        </>
    );
}

export default RedirectPage;