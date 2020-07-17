import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import ContactPage from './pages/contactpage.js';
import AboutPage from './pages/aboutpage.js';
import NotFound from './pages/notfoundpage.js';
import RCName from './RCName.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
            <Switch>
                <Route exact path='/' component={ContactPage} />
                <Route exact path='/about' component={AboutPage} />
                <Route exact path='/name' component={RCName} />
                <Route component={NotFound} />
            </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
