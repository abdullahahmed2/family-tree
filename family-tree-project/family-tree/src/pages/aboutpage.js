import React from 'react';
import NavBar from './nav.js';
import { Link } from 'react-router-dom';
import './pages.css';

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <div> <NavBar /> </div>
                <h1>About the Team</h1>
                <div>
                    <ul id="project-team">
                        <b>Project Manager</b>:
                        <li><a href="https://www.linkedin.com/in/shahina-rahman-81aa901b/">Shahina Rahman</a></li>
                    </ul>
                    <ul id="project-team">
                    <b>Project Team</b>:
                        <li>Ehsen Ahmad</li>
                        <li>Abdullah Ahmed</li>
                        <li>Muhammad Ahmed</li>
                        <li>Syed Fahad Ahmed</li>
                        <li><a href="https://www.linkedin.com/in/usama-ameen-ahmed-4501001b1/">Usama Ahmed</a></li>
                        <li><a href="https://www.linkedin.com/in/yusra-ahmed-741504196/">Yusra Ahmed</a></li>
                        <li><Link to='/abouthafsa'>Hafsa Aleem</Link></li>
                        <li><a href="https://www.linkedin.com/in/sofia-aleem-8b55a11a0/">Sofia Aleem</a></li>
                        <li>Ramiz Hassan</li>
                        <li><a href="https://www.linkedin.com/in/usman-rahman-6a6086161/">Usman Rahman</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default AboutPage;
