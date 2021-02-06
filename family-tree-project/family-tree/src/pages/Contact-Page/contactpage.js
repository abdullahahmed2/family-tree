import React from 'react';
import Header from '../Homepage/Header.js';
import Footer from '../Homepage/Footer.js';
import '../pages.css';
import testData from './contactpage.json';


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
                     
                        
                        {testData.map(data => ( 
                        <label for={data.id} id="labelsport">{data.title}
                        <input 
                        type={data.type}
                        id={data.id} 
                        name={data.name}
                        size= {data.size}
                        maxLength={data.maxLength}
                        placeholder={data.placeholder}
                        required> 
                        </input>
                        </label>
                        ))}

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
