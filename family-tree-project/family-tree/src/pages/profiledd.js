import React from 'react';
import  './profiledd.css';
import Testmodal from './testmodal.js';

 class Profiledd extends React.Component {
	render() {
	    return (
	      <div className="profiledd">
	        <div className="container">
	          <button type="button" className="button">
	            ☰
	          </button>
			  <div class="dropdown">
				  <ul>
					<li>Your Profile</li>
					<li>Edit Profile</li>
					<li>Logout</li>
				  </ul>
			  </div>
	        </div>
	      </div>
          
	    );
	  }
}
export default Profiledd
