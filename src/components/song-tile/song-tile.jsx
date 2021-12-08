import React from 'react';
import songsData from '../../assets/data/songsData';
import Tile from '../tile/tile';

const SongTile = () => {
    const songDataSorted = songsData.sort((a, b) => a.rank - b.rank);
    const topTiles = songDataSorted.slice(0, 5).map((song, index) =>(
        <Tile image={song.thumbnail} title={song.title} subtext={song.artist} key={index} />
    ));

    return (
        <div className="tiles d-flex align-items-center justify-content-around">
            {topTiles}
        </div>
    )
}

export default SongTile;
