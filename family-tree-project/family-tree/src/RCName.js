import React from 'react';
import './RCName.css';

class RCName extends React.Component {
  render() {
    return(
      <div>
      <h1 >Please enter your full name</h1>
        <form>
            <label for='name'><strong>First Name</strong> :</label>
            <input type='text' name='Firstname' id='Firstname' />
            <br />
            <br />
            <label for='name'><strong>Middle Name</strong> :</label>
            <input type='text' name='Middlename' id='Middlename' />
            <br />
            <br />
            <label for='name'><strong>Last Name</strong> :</label>
            <input type='text' name='Lastname' id='Lastname' />
          </form>
      </div>
    );
  }
}

export default RCName;
