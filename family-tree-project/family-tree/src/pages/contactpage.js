import React from 'react';
import NavBar from './nav.js';
import './pages.css';

class ContactPage extends React.Component {
    render() {
        return (
            <div className="App">
            <div> <NavBar /> </div>
                <h1>Contact Information</h1>
                <ul id="contact-info">
                    <li>Email us at: vtip2020@gmail.com</li>
                    <li>Check out our <a href="https://www.facebook.com/">Facebook</a> Page!</li>
                    <li>Follow our <a href="https://twitter.com/?lang=en">Twitter</a></li>
                </ul>
            </div>
        );
    }
}

export default ContactPage;
