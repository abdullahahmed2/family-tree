import React from 'react';
import ReactDOM from 'react-dom';

class RCName extends React.Component {
  render() {
    return(
      <form>
        <label for='name'>First Name</label>
        <input type='text' name='name' id='name'>
        <br>
        <label for='name'>Middle Name</label>
        <br>
        <label for='name'>Last Name</label>
      </form>
    );
  }
}



ReactDOM.render(
  <RCName />, document.getElementById('app');
)
