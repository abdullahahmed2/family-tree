import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

class NavBar extends React.Component {
    render () {
        return (
            <ul id="nav">
                <li>Home</li>
                <li> <Link to="/about">About the Team</Link> </li>
                <li> <Link to="/contact">Contact</Link> </li>
            </ul>
        )
    }
}

export default NavBar;
