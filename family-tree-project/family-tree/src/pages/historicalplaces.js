import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

class history extends React.Component {
  render() {
    return(
      <div>
        <div><Header/> </div>

        <h1>Historical Places</h1>
        <body>

        <h3>Patna</h3>
        <img id="p1" src="/images/patnaimage1.jpg" alt="Patna during British Occupation" width= "390" height= "300" />
        <img id="p3" src="/images/patnaimage3.jpg" alt="Women surround Religious Monument" width= "300" height= "370"/>
        <img id="p4" src="/images/patnaimage4.jpg" alt="Map of Patna" width= "370" height= "300"/>

        <p>Patna is the capital city of the province Bihar, and is one of the
        oldest continuously inhabited places in the world. It was founded in 490 BCE under the name of Pataliputra
        and borders the Ganges River. This city was the center of a lot of art and education and has been
        associated with two ancient religions, Buddhism and Jainism. This city has played a big role in India historically,
        being a significant  territory during the Delhi Sultanate, Mughul Empire, Nawabs of
        Bengal, East India Company, and the British Raj. Patna was the
        center of the First War of Independence and actively participated
        in India's independence movement. </p>

        <h3>Sherghati</h3>


        <img id="s1" src="/images/sherghatiimage1.jpg" alt="Picture of Sherghati's landscape" width= "350" height= "300"/>
        <img id="s2" src="/images/sherghatiimage2.jpg" alt="Picture of Shergotty meteorite" width= "350" height= "330"/>
        <img id="s3" src="/images/sherghatiimage3.jpg" alt="Picture of a drawing of a hills in Sherghati" width= "350" height= "300"/>

        <p> Sherghati is a town in Bihar, India in the Gaya district and is
        surrounded by the Morhar River. It translates to “The Valley of Lions”
        to honor the brave people that lived there. It was under the rule of the
        British Raj until in 1857 the monarch, Raja Jehangir Khan Bux, revolted
        against the British. In 1865, a meteorite from Mars landed in Sherghati,
        but was confiscated by colonisers and resides in a London museum as the
        “Shergotty meteorite”. Their main industry is agriculturally based, the
        major crops grown are rice, wheat, legume, groundnut, and sugarcane.</p>

        </body>

        <Footer/>
      </div>
    )
  }


}
export default history;
