import React from 'react';
import Header from '../Homepage/Header.js';
import Footer from '../Homepage/Footer.js';
import '../pages.css';

class ContactPage extends React.Component {
    render() {
        return (
            <div className="App">
            <div> <Header /> </div>
                <h1>Contact Information</h1>
                <ul id="contact-info">
                    <li>Email us at: vtip2020@gmail.com</li>
                    <li>Check out our <a href="https://www.facebook.com/" target="_blank">Facebook</a> Page!</li>
                    <li>Follow our <a href="https://twitter.com/?lang=en" target="_blank">Twitter</a></li>
                </ul>

                <Footer/>
            </div>


        );
    }
}

export default ContactPage;
