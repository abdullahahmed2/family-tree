import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import ContactPage from './pages/contactpage.js';
import AboutPage from './pages/aboutpage.js';
import NotFound from './pages/notfoundpage.js';
import RCName from './RCName.js';
import hafsapage from './contact/hafsapage.js';
import ehsenpage from './contact/ehsenpage.js';
import dobCalendar from './components/calendar-component.js';
import homepage from './pages/Homepage.js';

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
                <Route exact path='/dob' component={dobCalendar} />
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
