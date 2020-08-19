import React from 'react';
import '../../pages/pages.css';


class NavBar extends React.Component {
    render () {
        return (
            <ul id="nav">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/historicalplaces">Historical Places</a></li>
                <li><a href="/historicalplacestwo">V2HistoricalPlaces</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/name">Register</a></li>
                <li><a href="/">Family Hierarchy</a></li>
                <li><a href="/profile">Profile</a></li>
            </ul>
        )
    }
}

export default NavBar;
