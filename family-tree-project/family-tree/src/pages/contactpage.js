import React from 'react';

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
            </div>
        );
    }
}

export default ContactPage;
