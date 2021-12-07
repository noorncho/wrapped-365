import React from 'react';
import artistsData from "../../assets/data/artistsData";

const ArtistTile = () => {
    const topTiles = artistsData.slice(0, 5).map((artist, index) =>{
        return(
            <div className="tile px-4" key={index}>
                <img src={artist.thumbnail} alt={artist.name} className="tile__thumbnail" />
                <div className="tile__title">{artist.name}</div>
                <div className="tile__subtext-followers">{artist.follwers}</div>
            </div>
        );
    })

    return (
        <div className="tiles d-flex align-items-center justify-content-center">
            {topTiles}
        </div>
    )
}

export default ArtistTile;
