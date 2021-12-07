import React from 'react';
import SongList from '../../components/song-list/song-list';
import SongTile from '../../components/song-tile/song-tile';
import TopNav from '../../components/top-nav/top-nav';

const TopSongs = () => {
    return (
        <div className="top-songs">
            <h1>Top Songs</h1>
            <TopNav />
            <div className="row pb-5">                
                <SongTile />
            </div>
            <div className="row">                
                <SongList />
            </div>
        </div>
    )
}

export default TopSongs;
