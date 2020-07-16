import React from 'react';
import './RCName.css';

class RCName extends React.Component {
  render() {
    return(
     <body>
       <h1>Register Here</h1>
      <div className="register">
        <form method='post' id='register' action=''>
            <label for='name'>First Name:</label><br />
            <input type='text' name='Firstname' id='name' maxLength={10} placeholder='First name' required/><br /><br />

            <label for='name'>Middle Name:</label><br />
            <input type='text' name='Middlename' id='name' maxLength={10} placeholder='Middle name' required/><br /><br />

            <label for='name'>Last Name:</label><br />
            <input type='text' name='Lastname' id='name' maxLength={10} placeholder='Last name' required/><br /><br />

            <label>Mobile number: </label><br />
            <select id='phone'>
              <option>+92</option>
              <option>+1</option>
            </select>
            <input type='number' placeholder='Mobile number' name='Mobile number' id='Mnum' maxLength={10} required ></input><br /><br />

            <label>Email: </label><br />
            <input type='Email' name='email' id='name' placeholder='example@gmail.com'></input><br /><br />

            <label>Password: </label><br />
            <input type='Password' name='pass' id='name' placeholder='password' required></input><br /><br />

            <label>Re-enter your password:</label><br />
            <input type='Password' name='pass' id='name' placeholder='Re-enter password' required></input><br /><br />

            <label>Male:</label>&nbsp;
            <input type='radio' id='male'></input>&nbsp;&nbsp;
            <label>Female:</label>&nbsp;
            <input type='radio' id='female'></input><br /><br />

            <input type="submit" value="Submit" className="submit"/>
        </form>
      </div>
     </body>
    );
  }
}

export default RCName;
