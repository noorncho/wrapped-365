import React, {useEffect, useState, useRef} from 'react';
import hash from '../../assets/js/hash';
import { Navigate} from "react-router-dom";

const RedirectPage = () => {
    const[topArtistsData, setTopArtistsData] = useState({});
    const[topSongsData, setTopSongsData] = useState({});

    const _token = hash.access_token;
    console.log(_token);
    localStorage.setItem('params', JSON.stringify(_token));

    let artists;
    const artistsRef = useRef(null);
    let songs;
    //const songsRef = useRef(null);

    const getTopArtists = () =>{
        fetch("https://api.spotify.com/v1/me/top/artists", {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application-type',
                'Authorization': `Bearer ${_token}`,   
                //'Host': 'api.spotify.com'
            }
        })
        .then(response => response.json())
        .then(data =>{
            artists = data;
            console.log(artists);
            setTopArtistsData(artists);
        })
        .then(() => console.log(topArtistsData))
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
        .then(data => {
            songs = data;
            console.log(songs);
            setTopSongsData(songs);
        })
        .then(() => console.log(topSongsData))
        .catch(error => console.log(error));
    }
    
    useEffect(getTopArtists, [_token]);
    useEffect(getTopSongs, [_token]);
    
    console.log(topArtistsData);
    console.log(topSongsData);

    localStorage.setItem("artistsData", JSON.stringify(topArtistsData))
    localStorage.setItem("songsData", JSON.stringify(topSongsData))

    return (
        <>
            <h1> Redirect Page </h1>
            <Navigate to="/dashboard" />
        </>
    );
}

export default RedirectPage;