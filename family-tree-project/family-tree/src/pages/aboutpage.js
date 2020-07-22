import React from 'react';
import NavBar from './nav.js';
import { Link } from 'react-router-dom';
import './pages.css';
import Collapsible from './collapsible.js';

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
                        <li><Link to='/aboutehsen'>Ehsen Ahmad</Link></li>
                        <li>Abdullah Ahmed</li>
                        <li>Muhammad Ahmed</li>
                        <li>Syed Fahad Ahmed</li>
                        <li><a href="https://www.linkedin.com/in/usama-ameen-ahmed-4501001b1/">Usama Ahmed</a></li>
                        <li><a href="https://www.linkedin.com/in/yusra-ahmed-741504196/">Yusra Ahmed</a></li>
                        <li><Link to='/abouthafsa'>Hafsa Aleem</Link></li>
                        <li><a href="https://www.linkedin.com/in/sofia-aleem-8b55a11a0/">Sofia Aleem</a></li>
                        <li>Ramiz Hassan</li>
                        <li><Collapsible title="Usman Rahman">
                            <div><p>My name is Usman</p>
                                <p>Here is my linkedin profile:</p></div></Collapsible> </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default AboutPage;
