import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import ContactPage from './pages/contactpage.js';
import AboutPage from './pages/aboutpage.js';
import NotFound from './pages/notfoundpage.js';

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path='/' component={ContactPage} />
                <Route exact path='/about' component={AboutPage} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
