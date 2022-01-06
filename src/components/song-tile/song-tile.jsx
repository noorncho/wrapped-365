import React from 'react';
import Tile from '../tile/tile';

const SongTile = () => {
    const songsData = JSON.parse(localStorage.getItem("songsData"));
    const songsArr = songsData.items;
    const topTiles = songsArr.slice(0, 5).map((song, index) =>(
        <Tile image={song.album.images[0].url} title={song.name} subtext={song.artists[0].name} key={index} />
    ));

    return (
        <div className="tiles d-flex align-items-center justify-content-around">
            {topTiles}
        </div>
    )
}

export default SongTile;
