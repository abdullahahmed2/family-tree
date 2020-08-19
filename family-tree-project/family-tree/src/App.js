import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import homepage from './pages/Homepage/Homepage.js';
import Login from './pages/Login-Page/loginpage.js';
import ContactPage from './pages/Contact-Page/contactpage.js';
import AboutPage from './pages/About-Page/aboutpage.js';
import RCName from './pages/Registration-Page/Registration.js';
import Address from './components/Address-Component/address.js';
import history from './pages/History-Page/historicalplaces.js';
import Profiledd from './components/Profile-DropDown-Component/profiledd.js';
import Profile from './pages/Profile-Page/Profile.js';
import myFamily from './pages/Profile-Page/myfamily.js';
import helpTip from './components/HelpIcon-Component/helpicon.js';
import NotFound from './pages/notfoundpage.js';
import Country from './components/Country-DropDown-Component/country.js';
import Testmodal from './components/Modal-Component/modal.js';
import ForgotID from './pages/ForgotID/forgotID.js';
function App() {

  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path='/' component={homepage} />
                <Route exact path='/login' component={Login}/>
                <Route exact path='/contact' component={ContactPage} />
                <Route exact path='/about' component={AboutPage} />
                <Route exact path='/name' component={RCName} />
                <Route exact path='/address' component={Address} />
                <Route exact path='/historicalplaces' component={history} />
                <Route exact path='/profiledd' component={Profiledd} />
                <Route exact path='/profile' component={Profile} />
                <Route exact path='/myfamily' component={myFamily} />
                <Route exact path='/helpicon' component={helpTip} />
                <Route exact path='/country' component={Country} />
                <Route exact path='/forgot' component={ForgotID} />
                <Route exact path='/modal' component={Testmodal} />
                <Route exact path='/404' component={NotFound} />
                <Redirect to='/404' />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
