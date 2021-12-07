import React from 'react';
import songsData from '../../assets/data/songsData';

const SongTile = () => {
    const songDataSorted = songsData.sort((a, b) => a.rank - b.rank);
    const topTiles = songDataSorted.slice(0, 5).map((song, index) =>{
        return(
            <div className="tile px-3" key={index}>
                <img src={song.thumbnail} alt={song.name} className="tile__thumbnail" />
                <div className="tile__title">{song.title}</div>
                <div className="tile__subtext-artist">{song.artist}</div>
            </div>
        );
    });

    return (
        <div className="tiles d-flex align-items-center justify-content-center">
            {topTiles}
        </div>
    )
}

export default SongTile;
