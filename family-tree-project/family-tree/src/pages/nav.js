import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css';

class NavBar extends React.Component {
    render () {
        return (
            <ul id="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About the Team</Link> </li>
                <li><Link to="/contact">Contact</Link> </li>
            </ul>
        )
    }
}

export default NavBar;
