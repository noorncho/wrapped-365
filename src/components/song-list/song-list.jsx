import React from 'react';

const SongList = () => {
    const songsData = JSON.parse(localStorage.getItem("songsData"));
    const songsArr = songsData.items;
    const songsRanks = songsArr.map((song, index) =>(
        <div className="info-row" key={index}>{index + 1}</div>
    ));
    const songsTitles = songsArr.map((song, index) =>(
        <div className="info-row" key={index}>{song.name}</div>
    ));
    const songsArtists = songsArr.map((song, index) =>(
        <div className="info-row" key={index}>{song.artists[0].name}</div>
    ));
    const songsAlbums = songsArr.map((song, index) =>(
        <div className="info-row" key={index}>{song.album.name}</div>
    ));
    

    return (
        <div className="row list d-flex flex-column align-items-center text-left pb-4">
            <div className="columns d-flex justify-content-center">
                <div className="column__rank col-1">Rank <hr />{songsRanks}</div>
                <div className="column__title col-4">Title <hr />{songsTitles}</div>
                <div className="column__artist col-4">Artist <hr />{songsArtists}</div>
                {<div className="column__album col-3">Album <hr />{songsAlbums}</div>}
            </div>
        </div>
    )
}

export default SongList;