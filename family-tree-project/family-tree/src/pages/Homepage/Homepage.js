import React from 'react';
import './Homepage.css';
import Footer from './Footer.js';
import Header from './Header.js';

class homepage extends React.Component{
		render() {
			return(


				
				<body>
					<div>
						<Header/>

						<section id="showcase">
							<section id="text">
								<div className="container">
								<h2>where life begins</h2>
								<h1>AND NEVER ENDS</h1>
								</div>
							</section>
						</section>

						<Footer/>
					</div>
				</body>


			 )
		}
	}
export default homepage;
