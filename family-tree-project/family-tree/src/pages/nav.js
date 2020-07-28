import React from 'react';
import './pages.css';

class NavBar extends React.Component {
    render () {
        return (
            <ul id="nav">
                <li className="current"><a href="/Homepage.jss">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="">Family Hierarchy</a></li>
            </ul>
        )
    }
}

export default NavBar;
