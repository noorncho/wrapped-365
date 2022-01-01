import React from 'react';
import Navbar from '../../components/navbar/navbar';
import SongList from '../../components/song-list/song-list';
import SongTile from '../../components/song-tile/song-tile';
import TopNav from '../../components/top-nav/top-nav';

const TopSongs = () => {
    return (
        <div className="top-songs row">
            <div className="col col-md-2 col-xl-2">
                <Navbar />
            </div>
            <div className="col main-page">
                <h1>Top Songs</h1>
                <TopNav />
                <div className="row pb-5">                
                    <SongTile />
                </div>
                <div className="row">                
                    <SongList />
                </div>
            </div>
        </div>
    )
}

export default TopSongs;
