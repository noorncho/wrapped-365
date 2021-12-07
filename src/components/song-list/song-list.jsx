import React from 'react';
import songsData from '../../assets/data/songsData';

const SongList = () => {
    const songDataSorted = songsData.sort((a, b) => a.rank - b.rank);
    const songsRanks = songDataSorted.map(song =>{
        return(
            <div className="info-row">{song.rank}</div>
        );
    });
    const songsTitles = songDataSorted.map(song =>{
        return(
            <div className="info-row">{song.title}</div>
        );
    });
    const songsArtists = songDataSorted.map(song =>{
        return(
            <div className="info-row">{song.artist}</div>
        );
    });
    const songsAlbums = songDataSorted.map(song =>{
        return(
            <div className="info-row">{song.album}</div>
        );
    });
    

    return (
        <div className="row list d-flex flex-column align-items-center text-left">
            <div className="columns d-flex justify-content-around">
                <div className="column__rank col-1">Rank {songsRanks}</div>
                <div className="column__title col-4">Title {songsTitles}</div>
                <div className="column__artist col-4">Artist {songsArtists}</div>
                <div className="column__album col-3">Album {songsAlbums}</div>
            </div>
        </div>
    )
}

export default SongList;
