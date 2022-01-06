import React from 'react';
import Tile from '../tile/tile';

const ArtistTile = () => {
    const artistsData = JSON.parse(localStorage.getItem("artistsData"));
    const artistsArr = artistsData.items;

    const topTiles = artistsArr.slice(0, 5).map((artist, index) =>(
        <Tile image={artist.images[0].url} title={artist.name} subtext={artist.followers.total} key={index} />
    ));

    return (
        <div className="tiles d-flex align-items-center justify-content-around">
            {topTiles}
        </div>
    )
}

export default ArtistTile;