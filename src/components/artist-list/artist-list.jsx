import React from 'react';

const ArtistList = () => {
    const artistsData = JSON.parse(localStorage.getItem("artistsData"));
    const artistsArr = artistsData.items;
    console.log(artistsArr);

    const artistRanks = artistsArr.map((artist, index) =>(        
            <div className="info-row" key={index}>{index + 1}</div>
    ));
    const artistNames = artistsArr.map((artist, index) =>(        
        <div className="info-row" key={index}>{artist.name}</div>
    ));
    const artistLatest = artistsArr.map((artist, index) =>(        
        <div className="info-row" key={index}>{`${artist.genres}`}</div>
    ));
    const artistFollowers = artistsArr.map((artist, index) =>(        
        <div className="info-row" key={index}>{artist.followers.total}</div>
    ));


    return (
        <div className="row list d-flex flex-column align-items-center text-left pb-4">
            <div className="columns d-flex justify-content-around align-item-center">
                <div className="column__rank col-1">Rank <hr />{artistRanks}</div>
                <div className="column__artist col-4">Artist <hr />{artistNames}</div>
                <div className="column__latest col-4">Latest Release <hr />{artistLatest}</div>
                <div className="column__followers col-3">Followers <hr />{artistFollowers}</div>
            </div>
        </div>
    )
}

export default ArtistList;