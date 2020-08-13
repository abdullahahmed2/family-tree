import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Collapsible from 'react-collapsible';
import testData from './historicalpages.json';

class history extends React.Component {
  render() {
    return(
      <div>
        <div><Header/> </div>

        <h1>Historical Places</h1>
        <body>

        {testData.map(data => (
                <li><Collapsible trigger = {data.name}>
                    <p>{data.description}</p>
                    {data.image}
                    <p>{data.description}</p>
                    {data.image}
                    <p>{data.description}</p>
                    {data.image}
                </Collapsible></li>
        ))}

    )
  }


}
export default history;
