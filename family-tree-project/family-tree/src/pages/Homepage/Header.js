import React from 'react';
import './Homepage.css';
import NavBar from '../../components/nav.js';
import Profiledd from '../../components/profiledd.js';
import Testmodal from '../testmodal.js';
import headerData from './header-content-list.json';

class Header extends React.Component{
		render() {
			return(



        <header>

          <div className='container'>

						<div id ="brand">

						{headerData.map(data => (
								<h1 value={data.pageHeader}>
										{data.pageHeader}
								</h1>
						))}

            </div>



          </div>

		  <Profiledd/>

		  <div className = "profile">
		  <a href=""> <img src=" https://www.innonet.org/media/blank-profile-picture.png " width= "40px" height= "40px" /> </a>
		  </div>


          <NavBar/>




        </header>

    );
  }
}

export default Header ;
