import React from 'react';
import Header from '../Homepage/Header.js';
import Footer from '../Homepage/Footer.js';
import Collapsible from 'react-collapsible';
import testData from './historicalpages.json';


class history extends React.Component {
  render() {
    return (
      <div>
        <div><Header/> </div>

        <h1>Historical Places</h1>
        <body>

        {testData.map(data => (
                <li><Collapsible trigger = {data.name}>
                    <p>{data.description}</p>
                    <img src= {data.image1} />
                    <p>{data.para}</p>
                    <img src= {data.image2} />
                    <p>{data.thing}</p>
                    <img src= {data.image3} />
                </Collapsible></li>
        ))}

        </body>
        <Footer/>
      </div>
    )
  }

}

export default history;
