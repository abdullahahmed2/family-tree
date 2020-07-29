import React from 'react';
import './Homepage.css';


class homepage extends React.Component{
		render() {
			return(
				<div className="App">

				<body>
					<header>
						<div className='container'>
							<div id ="branding">
							<h1>SADAT-E-JAJNERI</h1>
							</div>

							<div className = "profile">
							<a href=""> <img  src=" https://www.innonet.org/media/blank-profile-picture.png " width= "43px" height= "43px" /> </a>
							</div>

							<nav>
							    <ul>
									<li className="current"><a href="Homepage.js">Home</a></li>
									<li><a href="">Family Hierarchy</a></li>
									<li><a href="">Update profile</a></li>
									<li><a href="">About</a></li>
								</ul>
							</nav>
						</div>
					</header>

					<section id="showcase">
						<div className="container">
						</div>
					</section>

					<section id="text">
						<div className="container">
						<h2>where life begins </h2>
						<h1>AND NEVER ENDS</h1>
						</div>
					</section>

					<section id="boxes">
						<div className="container">
							<div className="box1">
							`		<h1>Family hierarchy</h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
									tempor incclassclassunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet
									consectetur adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et
									dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit
									sed do eiusmod tempor incclassclassunt ut labore et dolore magna aliqua.</p>
									<br/>
									<br/>
									<br/>
									<a href =""><p className = "more"> Read more </p></a>
							</div>
							<div className="box2">
									<h1>About</h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet
									consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
									dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit
									sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
									<br/>
									<br/>
									<br/>
									<a href =""><p className = "more"> Read more </p></a>
							</div>
						</div>
					</section>

					<footer>
							<div className = "CR">
							Copyright &copy; 2020 SADAT-E-JAJNERI
							</div>
							<div className = "gmail">
							<a href = ""><img src = " https://upload.wikimedia.org/wikipedia/commons/4/45/New_Logo_Gmail.svg " width = "44px" height = "30px"/></a>
							</div>
					</footer>

				</body>

				</div>
			);
		}
	}
	export default homepage;
