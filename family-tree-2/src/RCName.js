import React from 'react';

export default class RCName extends React.Component {
  render() {
    return(
      <form>
        <label for='name'>First Name</label>
        <input type='text' name='Firstname' id='Firstname' />

        <label for='name'>Middle Name</label>
        <input type='text' name='Middlename' id='Middlename' />

        <label for='name'>Last Name</label>
        <input type='text' name='Lastname' id='Lastname' />
      </form>
    );
  }
}
