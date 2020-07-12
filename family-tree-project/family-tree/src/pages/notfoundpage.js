import React from 'react';
import { Link } from 'react-router-dom';
import './notfoundpage.css';

class NotFound extends React.Component {
    render() {
        return (
            <div>
                <h2>404: Page Not Found!</h2>
                <p>
                    Please click one of the links below:
                </p>
                <ul id="go-back">
                    <li>Home</li>
                    <li> <Link to="/about">About the Team</Link> </li>
                    <li> <Link to="/contact">Contact Us</Link> </li>
                </ul>
            </div>
        )
    }
}

export default NotFound;
