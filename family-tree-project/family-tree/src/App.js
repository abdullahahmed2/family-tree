import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import ContactPage from './pages/Contact-Page/contactpage.js';
import AboutPage from './pages/About-Page/aboutpage.js';
import NotFound from './pages/notfoundpage.js';
import RCName from './pages/Registration-Page/Registration.js';
import hafsapage from './pages/hafsapage.js';
import ehsenpage from './pages/ehsenpage.js';
import helpTip from './components/helpicon.js';
import homepage from './pages/Homepage/Homepage.js';
import Address from './components/address.js';
import history from './pages/History-Page/historicalplaces.js';
import Login from './pages/Login-Page/loginpage.js';
import ContentListTest from './pages/test-content-list.js';
import Profiledd from './components/profiledd.js';
import Profile from './pages/Profile-Page/Profile.js';

function App() {

  return (
    <div className="App">
      <div className="container">
        <Router>
            <Switch>
                <Route exact path='/' component={homepage} />
                <Route exact path='/login' component={Login}/>
                <Route exact path='/contact' component={ContactPage} />
                <Route exact path='/about' component={AboutPage} />
                <Route exact path='/helpicon' component={helpTip} />
                <Route exact path='/name' component={RCName} />
                <Route exact path='/address' component={Address} />
                <Route exact path='/historicalplaces' component={history} />
                <Route exact path='/profiledd' component={Profiledd} />
                <Route exact path='/profile' component={Profile} />
                <Route exact path='/404' component={NotFound} />
                <Redirect to='/404' />
            </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
