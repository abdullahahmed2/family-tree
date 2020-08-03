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

        <img id="patnaimage1" src=" https://www.lib.lsu.edu/sites/all/files/sc/exhibits/e-exhibits/india/px2d7.jpg " alt="Patna during British Occupation"/>
        <p>This city has played a big role in India historically, being a significant
        territory during the Delhi Sultanate, Mughul Empire, Nawabs of
        Bengal, East India Company, and the British Raj. Patna was the
        center of the First War of Independence and actively participated
        in India's independence movement.</p>
        <img id="patnaimage2" src=" https://files.slack.com/files-pri/T015X84M2RX-F017EFULB2B/image.png " alt="Patna Monument"/>
        <p>Patna is the capital city of the province Bihar, and is one of the
        oldest continuously inhabited places in the world.</p>
        <img id="patnaimage3" src=" https://www.nativeplanet.com/photos/original/2013/07/_13733583282.jpg " alt="Women surround Religious Monument"/>
        <p>Patna was the center of a lot of art and education and has been
        associated with two ancient religions, Buddhism and Jainism. </p>
        <img id="patnaimage4" src=" https://www.antiquemapsandprints.com/ekmps/shops/richben90/images/INDIA.-Patna-sketch-map-c1885-old-antique-vintage-plan-chart-222335-p.jpg " alt="Map of Patna"/>
        <p>It was founded in 490 BCE under the name of Pataliputra and borders the Ganges River.</p>

        <h3>Sherghati</h3>

        <img scr="Downloads/sherghati.jpeg" alt="Picture of Sherghati"/>
        <img src=" https://www.gozocabs.com/blog/wp-content/uploads/2018/06/Sherghati.jpg " />

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
