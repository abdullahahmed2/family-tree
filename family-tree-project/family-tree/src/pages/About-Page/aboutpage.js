import React from 'react';
import Header from '../Homepage/Header.js';
import Footer from '../Homepage/Footer.js';
import '../pages.css';
import Collapsible from 'react-collapsible';
import testData from './aboutpage-content.json';

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <div> <Header /> </div>
                <h1>About the Team</h1>
                <div>
                    <ul id="project-team">
                        <b>Project Manager</b>:
                        <li><Collapsible trigger="Shahina Rahman">
                            <p></p>
                            <a href="https://www.linkedin.com/in/shahina-rahman-81aa901b/" target="_blank" rel="noopener noreferrer">Connect with Shahina on LinkedIn!</a>
                            </Collapsible></li>
                    </ul>

                    <ul id="project-team">
                    <b>Project Team</b>:
                        {testData.map(data => (
                                <li><Collapsible trigger = {data.name}>
                                    <p>{data.description}</p>
                                    <a href={data.LinkedIn} target="_blank" rel="noopener noreferrer">Connect with {data.name} on LinkedIn!</a>
                                </Collapsible></li>
                        ))}
                          <Footer/>
                    </ul>
                </div>
            </div>
        )
    }
}

export default AboutPage;
