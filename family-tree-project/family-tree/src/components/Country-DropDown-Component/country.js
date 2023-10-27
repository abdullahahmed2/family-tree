import React from 'react';
import countries from './country-list.json';
import './country.css';

class Country extends React.Component{
  render() {
    return(
      <div className='box'>
        <form className='form'>
          <label>Choose a country:</label><br />
          <select>
              {countries.map(data => (
                <option key={data.id} value={data.name}>
                  {data.name}
                </option>
            ))}
          </select>
        </form>

      </div>
    )

  }
}

export default Country;
