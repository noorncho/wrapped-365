import React from 'react';
import artistsData from "../../assets/data/artistsData";
import Tile from '../tile/tile';

const ArtistTile = () => {
    const artistsDataSorted = artistsData.sort((a, b) => a.rank - b.rank);
    const topTiles = artistsDataSorted.slice(0, 5).map((artist, index) =>(
        <Tile image={artist.images[0].url} title={artist.name} subtext={artist.followers.total} key={index} />
    ));

    return (
        <div className="tiles d-flex align-items-center justify-content-around">
            {topTiles}
        </div>
    )
}

export default ArtistTile;