import React from 'react';
import ArtistList from '../../components/artist-list/artist-list';
import ArtistTile from '../../components/artist-tile/artist-tile';
import TopNav from '../../components/top-nav/top-nav';

const TopArtists = () => {
    return (
        <div className="top-artists">
            <h1>Top Artists</h1>
            <TopNav />
            <div className="row pb-5">
                <ArtistTile />
            </div>
            <div className="row ">
                <ArtistList />
            </div>                        
        </div>
    )
}

export default TopArtists;
