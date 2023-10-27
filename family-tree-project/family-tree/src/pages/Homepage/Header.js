import React from 'react';
import './Homepage.css';
import NavBar from '../../components/Navbar-Component/nav.js';
import Profiledd from '../../components/Profile-DropDown-Component/profiledd.js';
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
          			<NavBar/>
        		</header>

    );
  }
}

export default Header ;
