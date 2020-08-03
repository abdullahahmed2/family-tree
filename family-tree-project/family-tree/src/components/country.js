import React from 'react';

class Country extends React.Component{


  render() {
    return(
      <body>
        <div>
          <label>Choose a country:</label><br />
          <select id='country' placeholder='country'>
            <option>America</option>
            <option>Pakistan</option>
          </select>
        </div>

      </body>
    )
  }
}

export default Country;
