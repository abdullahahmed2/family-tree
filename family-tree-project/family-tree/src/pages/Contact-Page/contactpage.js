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
                    <li>Check out our <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a> Page!</li>
                    <li>Follow our <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><p>To contact our team members!</p> <a href="/about">About</a></li>
                </ul>
                <body id="feedback-form">
                    <h2>Feedback</h2>
                    <p>Feel free to fill out the form as any feedback is appreciated!</p>
                    <form >
                        <label for="F-name">Name:</label>&nbsp;
                        <input 
                        type="text" 
                        id="F-name" 
                        name="F-name"
                        size= "40"
                        maxLength={30}
                        placeholder='First and last name'
                        required>
                        </input>

                        <br></br><br></br>

                        <label for="F-email">Email Address:</label>&nbsp;
                        <input 
                        type="text" 
                        id="F-email" 
                        name="F-email"
                        size= "40"
                        maxLength={40}
                        placeholder='Enter full email address'
                        required>
                        </input>

                        <br></br><br></br>

                        <label for="F-Topic">Topic:</label>&nbsp;
                        <input 
                        type="text" 
                        id="F-tpic" 
                        name="F-topic"
                        size= "30"
                        maxLength={40}
                        placeholder='Topic of your feedback'
                        required>
                        </input>

                        <br></br><br></br>

                        <label for="F-description">Description:</label>&nbsp;
                        <br></br>
                        <textarea 
                        type="text" 
                        id="F-description" 
                        name="F-description"
                        size = "100"
                        maxLength={650}
                        placeholder='List your feedback!'
                        required>
                        </textarea>

                        <br></br><br></br>

                        <input id="F-submit" type="submit" value="Submit"></input>
                    </form>
                </body>

                <Footer/>
            </div>


        );
    }
}

export default ContactPage;
