import React from 'react';
import './Homepage.css';
import NavBar from './nav.js';
import Footer from './Footer.js';

class homepage extends React.Component{
		render() {
			return(


				<div>
					<body>

						<header>
							<div className='container'>
								<div id ="branding">
								<h1>SADAT-E-JAJNERI test</h1>
								</div>

								<div className = "profile">
								<a href=""> <img src=" https://www.innonet.org/media/blank-profile-picture.png " width= "40px" height= "40px" /> </a>
							  </div>
							</div>

							<NavBar/>
						</header>

						<section id="showcase">
							<section id="text">
								<div className="container">
								<h2>where life begins</h2>
								<h1>AND NEVER ENDS</h1>
								</div>
							</section>
						</section>

						<Footer/>

					</body>

				</div>
			)
		}
	}

export default homepage;
