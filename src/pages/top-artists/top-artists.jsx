import React from 'react';
import ArtistList from '../../components/artist-list/artist-list';
import ArtistTile from '../../components/artist-tile/artist-tile';
import Navbar from '../../components/navbar/navbar';
import TopNav from '../../components/top-nav/top-nav';

const TopArtists = () => {
    return (
        <div className="top-artists vh-100 row">
            <div className="col col-md-2 col-xl-2">
                <Navbar />
            </div>
            <div className="col main-page">
                <h1>Top Artists</h1>
                <TopNav />
                <div className="row pb-5">
                    <ArtistTile />
                </div>
                <div className="row ">
                    <ArtistList />
                </div>
            </div>                        
        </div>
    )
}

export default TopArtists;
