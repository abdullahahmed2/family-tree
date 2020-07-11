import React from 'react';
import { Link } from 'react-router-dom';

class ContactPage extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Contact Information</h1>
                <ul>
                    <li>Email us at: vtip2020@gmail.com</li>
                    <li>Check out our <a href="https://www.facebook.com/">Facebook</a> Page!</li>
                    <li>Follow our <a href="https://twitter.com/?lang=en">Twitter</a></li>
                </ul>
                <div>
                    <Link to="/about">About the Team</Link>
                </div>
            </div>
        );
    }
}

export default ContactPage;
