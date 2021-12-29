import React from 'react';
import songsData from '../../assets/data/songsData';

const SongList = () => {
    const songDataSorted = songsData.sort((a, b) => a.rank - b.rank);
    const songsRanks = songDataSorted.map((song, index) =>(
        <div className="info-row" key={index}>{song.rank}</div>
    ));
    const songsTitles = songDataSorted.map((song, index) =>(
        <div className="info-row" key={index}>{song.title}</div>
    ));
    const songsArtists = songDataSorted.map((song, index) =>(
        <div className="info-row" key={index}>{song.artist}</div>
    ));
    const songsAlbums = songDataSorted.map((song, index) =>(
        <div className="info-row" key={index}>{song.album}</div>
    ));
    

    return (
        <div className="row list d-flex flex-column align-items-center text-left pb-4">
            <div className="columns d-flex justify-content-center">
                <div className="column__rank col-1">Rank <hr />{songsRanks}</div>
                <div className="column__title col-4">Title <hr />{songsTitles}</div>
                <div className="column__artist col-4">Artist <hr />{songsArtists}</div>
                <div className="column__album col-3">Album <hr />{songsAlbums}</div>
            </div>
        </div>
    )
}

export default SongList;