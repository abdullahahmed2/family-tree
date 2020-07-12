import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import ContactPage from './pages/contactpage.js';
import AboutPage from './pages/aboutpage.js';
import NotFound from './pages/notfoundpage.js';
import NavBar from './pages/nav.js';

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/contact" component={ContactPage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
