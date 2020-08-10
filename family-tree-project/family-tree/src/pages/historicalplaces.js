import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Collapsible from 'react-collapsible';
import patnaimage1 from './public/images/patnaimage1'

class history extends React.Component {
  render() {
    return(
      <div>
        <div><Header/> </div>

        <h1>Historical Places</h1>
        <body>

        <Collapsible trigger="Patna" id="Patna">
        <img id="p4" src="patnaimage1" alt="Map of Patna" width= "370" height= "300"/>
        <p>Patna is the capital city of the province Bihar, and is one of the
        oldest continuously inhabited places in the world. It was founded in 490 BCE under the name of Pataliputra
        and borders the Ganges River.</p>
        <img id="p1" src="/images/patnaimage1.jpg" alt="Patna during British Occupation" width= "390" height= "300" />
        <p>This city has played a big role in India historically,
        being a significant  territory during the Delhi Sultanate, Mughul Empire, Nawabs of
        Bengal, East India Company, and the British Raj. Patna was the
        center of the First War of Independence and actively participated
        in India's independence movement. </p>
        <img id="p3" src="/images/patnaimage3.jpg" alt="Women surround Religious Monument" width= "300" height= "370"/>
        <p>Patna was the center of a lot of art and education and has been
        associated with two ancient religions, Buddhism and Jainism.</p>
            </Collapsible>


            <Collapsible trigger="Sherghati">
            <img id="s3" src="/images/sherghatiimage3.jpg" alt="Drawing of a hills in Sherghati" width= "350" height= "300"/>
            <p> Sherghati is a town in Bihar, India in the Gaya district and is surrounded by the Morhar River. It translates to “The Valley of Lions”
            to honor the brave people that lived there. It was under the rule of the
            British Raj until in 1857 the monarch, Raja Jehangir Khan Bux, revolted
            against the British.</p>
            <img id="s1" src="/images/sherghatiimage1.jpg" alt="Sherghati landscape" width= "350" height= "300"/>
            <p>Their main industry is agriculturally based, the
            major crops grown are rice, wheat, legume, groundnut, and sugarcane.</p>
            <img id="s2" src="/images/sherghatiimage2.jpg" alt="Shergotty meteorite" width= "350" height= "330"/>
            <p>In 1865, a meteorite from Mars landed in Sherghati,
            but was confiscated by colonisers and resides in a London museum as the
            “Shergotty meteorite”.</p>
                </Collapsible>


        </body>

        <Footer/>
      </div>
    )
  }


}
export default history;
