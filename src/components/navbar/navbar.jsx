//import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
    const navItems = [
        {link: "/dashboard", text: "Home"},
        {link: "/topArtists", text: "Top Artists"},
        {link: "/topSongs", text: "Top Songs"}
    ];

    const mappedNavItems = navItems.map(({link, text}, index) => {
        return(
            <Link exact to={link} className="side-nav__link" key={index}>
                <span className="side-nav__link-text px-4">
                    {text}
                </span>
            </Link>
        )
    });

    return (
        <div className="side-nav d-flex flex-column justify-content-around flex-wrap">
            {mappedNavItems}
        </div>
    )
}

export default Navbar;
