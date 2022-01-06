import React from 'react';
import ArtistTile from '../../components/artist-tile/artist-tile';
import Navbar from '../../components/navbar/navbar';
import SongList from '../../components/song-list/song-list';
import SongTile from '../../components/song-tile/song-tile';
import TopNav from '../../components/top-nav/top-nav';

const Home = () => {
    const songsData = JSON.parse(localStorage.getItem("songsData"));
    const songsArr = songsData.items;
    console.log(songsArr);
    const artistsData = JSON.parse(localStorage.getItem("artistsData"));
    const artistsArr = artistsData.items;
    console.log(artistsArr);

    return (
        <div className="row home">
            <div className="col col-md-2 col-xl-2">
                <Navbar />
            </div>

            <div className="col main-page">
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
        </div>
    )
}

export default Home;
