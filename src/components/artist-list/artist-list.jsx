import React from 'react';
import artistsData from '../../assets/data/artistsData';

const ArtistList = () => {
    const artistDataSorted = artistsData.sort((a, b) => a.rank - b.rank);
    const artistRanks = artistDataSorted.map(artist =>(        
            <div className="info-row">{artist.rank}</div>
    ));
    const artistNames = artistDataSorted.map(artist =>(        
        <div className="info-row">{artist.name}</div>
    ));
    const artistLatest = artistDataSorted.map(artist =>(        
        <div className="info-row">{artist.latestRelease}</div>
    ));
    const artistFollowers = artistDataSorted.map(artist =>(        
        <div className="info-row">{artist.followers}</div>
    ));


    return (
        <div className="row list d-flex flex-column align-items-center text-left">
            <div className="columns d-flex justify-content-around">
                <div className="column__rank col-1">Rank {artistRanks}</div>
                <div className="column__artist col-4">Artist {artistNames}</div>
                <div className="column__latest col-4">Latest Release {artistLatest}</div>
                <div className="column__followers col-3">Followers {artistFollowers}</div>
            </div>
        </div>
    )
}

export default ArtistList;