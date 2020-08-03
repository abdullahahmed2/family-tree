import React from 'react';
import './RCname.css';
import NavBar from './nav.js';

class RCName extends React.Component {
  render() {
    return(

       <body>

        <div className="container">
            <NavBar/>

          <form method='post' id='register' action=''>

              <h1> Register </h1>

              <label for='Fname'>Name:</label><br/>
              <input type='text' name='Firstname' id='Fname' maxLength={10} placeholder='First name' required/>

              <input type='text' name='Middlename' id='Mname' maxLength={10} placeholder='Middle name' required/>

              <input type='text' name='Lastname' id='Lname' maxLength={10} placeholder='Last name' required/><br/><br/>



              <label for='dob'>Date of Birth:</label><br/>
              <input type='date' name='date-of-birth' id='dob' placeholder='mm/dd/yyyy' required/> <br/><br/>


              <label for="Mnum">Mobile number: </label><br/>
              <select id='phone'>
                <option>+92</option>
                <option>+1</option>
              </select>
              <input type='number' placeholder='Mobile number' name='Mobile number' id='Mnum' maxLength={10} required ></input><br />



              <label for="email">Email: </label><br />
              <input type='Email' name='email' id='email' placeholder='example@gmail.com' required></input><br /><br />



              <label for="password">Password: </label><br />
              <input type='Password' name='pass' id='password' placeholder='password' required></input><br /><br />

              <label for="Rpassword">Re-enter password:</label><br />
              <input type='Password' name='pass' id='Rpassword' placeholder='Re-enter password' required></input><br /><br />



              <label className='gender'>Male:</label>&nbsp;
              <input type='radio' id='gender'></input>&nbsp;&nbsp;
              <label className='gender'>Female:</label>&nbsp;
              <input type='radio' id='gender'></input><br /><br />


              <input type="submit" value="Submit" className="submit"/>
          </form>
        </div>
       </body>
    );
  }
}

export default RCName;
