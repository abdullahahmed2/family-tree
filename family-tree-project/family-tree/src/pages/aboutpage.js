import React from 'react';
import NavBar from './nav.js';
import { Link } from 'react-router-dom';
import './pages.css';
import Collapsible from 'react-collapsible';
import ehsenpage from './ehsenpage.js';

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <div> <NavBar /> </div>
                <h1>About the Team</h1>
                <div>
                    <ul id="project-team">
                        <b>Project Manager</b>:
                        <li>Shahina Rahman</li>
                    </ul>
                    <ul id="project-team">
                    <b>Project Team</b>:
                        <li>Ehsen Ahmad</li>
                        <li>Abdullah Ahmed</li>
                        <li>Muhammad Ahmed</li>
                        <li>Syed Fahad Ahmed</li>
                        <li>Usama Ahmed</li>
                        <li>Yusra Ahmed</li>
                        <li>Hafsa Aleem</li>
                        <li>Sofia Aleem</li>
                        <li>Ramiz Hassan</li>
                        <li><Collapsible trigger="Usman Rahman">
                            <p>UConn CS Student</p>
                            </Collapsible> </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default AboutPage;
