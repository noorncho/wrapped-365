import React from 'react';
import ArtistTile from '../../components/artist-tile/artist-tile';
import SongList from '../../components/song-list/song-list';
import SongTile from '../../components/song-tile/song-tile';
import TopNav from '../../components/top-nav/top-nav';

const Home = () => {
    console.log(localStorage.getItem("songsData"));
    console.log(localStorage.getItem("artistsData"));

    return (
        <div>
            <h1>Home</h1>
            <TopNav />
            <div className="top-artistis">
                <h1>Top Artists</h1>
                <ArtistTile />
            </div>
            <div className="top-songs">
                <h1>Top Songs</h1>
                <SongTile />
            </div>
            <br />
            <SongList />
        </div>
    )
}

export default Home;
