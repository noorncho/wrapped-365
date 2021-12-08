import React from 'react'

const Tile = ({image, title, subtext}) => {
    return (
        <div className="tile card py-2 px-2">
            <img src={image} alt={title} className="tile__thumbnail" />
            <div className="tile__title">{title}</div>           
            <div className="tile__subtext">{subtext}</div>
        </div>
    )
}

export default Tile;
