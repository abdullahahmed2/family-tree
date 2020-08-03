import React from 'react';

class City extends React.Component{
  constructor(props) {
    super(props);
    this.searchCity = this.searchCity.bind(this);
  }



  render() {
    return(
      <body>
        <div>
          <label>Choose a city:</label><br />
          <select id='city' placeholder='city' onClick={this.searchCity}>
            <option>Karachi</option>
            <option>Lahore</option>
          </select>
        </div>
        <script>function searchCity() {
            const input = document.getElementById('city');
            const autocomplete = new google.maps.places.Autocomplete(input);
          }</script>
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAMG796syVYllVoH4wg2d0eQJADtdZp-pQ&libraries=places&callback=searchCity"></script>
      </body>
    )
  }
}

export default City;
