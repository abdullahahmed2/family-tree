import React from 'react';
import ReactDOM from 'react-dom';

export default class RCName extends React.Component {
  render() {
    return(
      <form>
        <label for='name'>First Name</label>
        <input type='text' name='Firstname' id='Firstname' />
        <br>
        <label for='name'>Middle Name</label>
        <input type='text' name='Middlename' id='Middlename' />
        <br>
        <label for='name'>Last Name</label>
        <input type='text' name='Lastname' id='Lastname' />
      </form>
    );
  }
}
