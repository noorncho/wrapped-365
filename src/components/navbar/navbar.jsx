//import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
    const navItems = [
        {link: "/", text: "Home"},
        {link: "/topArtists", text: "Top Artists"},
        {link: "/topSong", text: "Top Songs"}
    ];

    const mappedNavItems = navItems.map(({link, text}, index) => {
        return(
            <Link exact to={link} className="navbar__link" key={index}>
                <span className="navbar__link-text">
                    {text}
                </span>
            </Link>
        )
    });

    return (
        <div className="navbar d-flex flex-column justify-content-start">
            <br />
            <br />
            <br />
            {mappedNavItems}
        </div>
    )
}

export default Navbar;
