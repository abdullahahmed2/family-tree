import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import ContactPage from './pages/contactpage.js';
import AboutPage from './pages/aboutpage.js';
import NotFound from './pages/notfoundpage.js';
import RCName from './RCName.js';
import hafsapage from './contact/hafsapage.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
            <Switch>
                <Route exact path='/contact' component={ContactPage} />
                <Route exact path='/about' component={AboutPage} />
                <Route exact path='/abouthafsa' component={hafsapage} />
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
