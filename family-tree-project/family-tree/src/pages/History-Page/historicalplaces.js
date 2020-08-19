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
                <Collapsible trigger = {data.name}>
                    <img src= {data.image1} alt='' width= {data.width1} height= {data.height1}/>
                    <p>{data.description}</p>
                    <img src= {data.image2} alt='' width= {data.width2} height= {data.height2} />
                    <p>{data.para}</p>
                    <img src= {data.image3} alt='' width= {data.width3} height= {data.height3}/>
                    <p>{data.thing}</p>
                </Collapsible>
        ))}

        </body>
        <Footer/>
      </div>
    )
  }

}

export default history;
