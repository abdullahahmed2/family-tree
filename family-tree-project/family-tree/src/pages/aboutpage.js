import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import { Link } from 'react-router-dom';
import './pages.css';
import Collapsible from 'react-collapsible';
import ehsenpage from './ehsenpage.js';

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
                            <a href="https://www.linkedin.com/in/shahina-rahman-81aa901b/" target="_blank">Connect with Shahina on LinkedIn!</a>
                            </Collapsible></li>
                    </ul>
                    <ul id="project-team">
                    <b>Project Team</b>:

                        <li><Collapsible trigger="Ehsen Ahmad">
                            <p>Ehsen is a first-year engineering student at Northeastern. He enjoys learning different CS languages and applying them in mini projects.</p>
                            <a href="https://www.linkedin.com/in/ehsen-ahmad-7374921b3//" target="_blank">Connect with Ehsen on LinkedIn!</a>
                            </Collapsible></li>

                        <li><Collapsible trigger="Abdullah Ahmed">
                            <p>Abdullah Ahmed</p>
                            <a href="http://linkedin.com/in/abdullah-ahmed-3698251b0" target="_blank">Connect with Abdullah on LinkedIn!</a>
                            </Collapsible></li>

                        <li><Collapsible trigger="Muhammad Ahmed">
                            <p>Muhammad Ahmed</p>
                            <a href="https://www.linkedin.com/" target="_blank">Connect with Muhammad on LinkedIn!</a>
                            </Collapsible> </li>

                        <li><Collapsible trigger="Syed Fahad Ahmed">
                            <p>Syed Fahad Ahmed</p>
                            <a href="https://www.linkedin.com/" target="_blank">Connect with Syed on LinkedIn!</a>
                            </Collapsible> </li>

                        <li><Collapsible trigger="Usama Ahmed">
                            <p>Usama Ahmed</p>
                            <a href="https://linkedin.com/in/usama-ameen-ahmed-4501001b1" target="_blank">Connect with Usama on LinkedIn!</a>
                            </Collapsible> </li>

                        <li><Collapsible trigger="Yusra Ahmed">
                            <p>Yusra Ahmed</p>
                            <a href="http://linkedin.com/in/yusra-ahmed-741504196" target="_blank">Connect with Yusra on LinkedIn!</a>
                            </Collapsible> </li>

                        <li><Collapsible trigger="Hafsa Aleem">
                          <div>
                          <p>Hafsa is a high school student who worked alongside her team members to build this family-oriented application. She picked up many new skills, such as coding, to help contribute to this project. Hafsa is eager to continue gaining experience in different fields in order to determine her future work pathway.</p>
                            <a href="https://www.linkedin.com/in/hafsa-aleem-773358a5/" target="_blank">Connect with Hafsa on LinkedIn!</a>
                          </div>
                          </Collapsible></li>

                        <li><Collapsible trigger="Sofia Aleem">
                            <p>Sofia Aleem</p>
                            <a href="https://www.linkedin.com/in/sofia-aleem-8b55a11a0/" target="_blank">Connect with Sofia on LinkedIn!</a>
                            </Collapsible> </li>

                        <li><Collapsible trigger="Ramiz Hassan">
                            <p>Ramiz Hassan</p>
                            <a href="https://www.linkedin.com/" target="_blank">Connect with Ramiz on LinkedIn!</a>
                            </Collapsible> </li>

                        <li><Collapsible trigger="Usman Rahman">
                            <p>UConn CS Student</p>
                            <a href="https://www.linkedin.com/in/usman-rahman-6a6086161/" target="_blank">Connect with Usman on LinkedIn!</a>
                            </Collapsible> </li>

                          <Footer/>  
                    </ul>
                </div>
            </div>
        )
    }
}

export default AboutPage;
