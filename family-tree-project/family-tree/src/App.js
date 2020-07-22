import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import ContactPage from './pages/contactpage.js';
import AboutPage from './pages/aboutpage.js';
import NotFound from './pages/notfoundpage.js';
import RCName from './RCName.js';
import hafsapage from './contact/hafsapage.js';
import ehsenpage from './contact/ehsenpage.js';
<<<<<<< HEAD
import helpTip from './components/helpicon.js';
=======
import dobCalendar from './components/calendar-component.js';
import homepage from './pages/Homepage.js';
>>>>>>> 40e6c378d2b65e94e12f53b9076a17d444a9b883

function App() {

  return (
    <div className="App">
      <div className="container">
        <Router>
            <Switch>
                <Route exact path='/' component={homepage} />
                <Route exact path='/contact' component={ContactPage} />
                <Route exact path='/about' component={AboutPage} />
                <Route exact path='/abouthafsa' component={hafsapage} />
                <Route exact path='/aboutehsen' component={ehsenpage} />
<<<<<<< HEAD
                <Route exact path='/helpicon' component={helpTip} />
=======
                <Route exact path='/dob' component={dobCalendar} />
>>>>>>> 40e6c378d2b65e94e12f53b9076a17d444a9b883
                <Route exact path='/name' component={RCName} />
                <Route exact path='/404' component={NotFound} />
                <Redirect to='/404' />
            </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
