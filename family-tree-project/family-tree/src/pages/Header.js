import React from 'react';
import './Homepage.css';
import NavBar from './nav.js';
import Profiledd from './profiledd.js';
import Testmodal from './testmodal.js';

class Header extends React.Component{
		render() {
			return(



        <header>

          <div className='container'>
            <div id ="branding">
            <h1>SILSILA SADAT-E-BIHAR</h1>
            </div>

            <div className = "profile">
            <a href=""> <img src=" https://www.innonet.org/media/blank-profile-picture.png " width= "40px" height= "40px" /> </a>
            </div>
          </div>

		  
          <NavBar/>
		  <Profiledd/>








        </header>

    );
  }
}

export default Header ;
