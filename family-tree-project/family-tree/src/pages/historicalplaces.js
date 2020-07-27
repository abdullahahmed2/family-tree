import React from 'react';
import NavBar from './nav.js';

class history extends React.Component {
  render() {
    return(
      <div>
        <div><NavBar/> </div>

        <h1>Historical Places</h1>
        <body>

        <h3>Patna</h3>

        <img scr="Patna.jpg" alt="Picture of Patna" />

        <p> Patna is the capital city of the province Bihar, and is one of the
        oldest conintuously inhabited places in the world. It was founded in
        490 BCE under the name of Pataliputra and borders the Ganges River.
        Patna was the center of a lot of art and education and has been
        associated with two ancient religions, Buddhism and Jainism. This
        city has played a big role in India historically, being a significant
        territory during the Delhi Sultanate, Mughul Empire, Nawabs of
        Bengal, East India Company, and the British Raj. Patna was the
        center of the First War of Independence and actively participated
        in India's independence movement.</p>
        <br></br>

        <h3>Sherghati</h3>

        <img scr="" alt="Picture of Sherghati"/>

        <p> Sherghati is a town in Bihar, India in the Gaya district and is
        surrounded by the Morhar River. It translates to “The Valley of Lions”
        to honor the brave people that lived there. It was under the rule of the
        British Raj until in 1857 the monarch, Raja Jehangir Khan Bux, revolted
        against the British. In 1865, a meteorite from Mars fell in this town
        which was being kept in a London museum and is called the
        “Shergotty meteorite”. Their main industry is agriculturally based, the
        major crops grown are rice, wheat, legume, groundnut, and sugarcane.</p>

        </body>
      </div>
    )
  }


}
export default history;
