import React from 'react';
import Header from '../Homepage/Header.js';
import Footer from '../Homepage/Footer.js';
import Collapsible from 'react-collapsible';
/* import testData from './historicalpagestwo.json'; */

class history2 extends React.Component {
  render() {
    return(
          <div>
            <div><Header/> </div>

            <h1>Historical Places</h1>
            <body>

            <ul>
                  < a href="#Patna" > <b>Patna</b></a>
            </ul>
            <ul>
                  < a href="#Sherghati" > <b>Sherghati</b></a>
            </ul>
            <ul>
                  < a href="#Example1" > <b>Example1</b></a>
            </ul>
            <ul>
                  < a href="#Example2" > <b>Example2</b></a>
            </ul>
            <ul>
                  < a href="#Example3" > <b>Example3</b></a>
            </ul>

                  <a name="Patna"></a>
            <h3>Patna</h3>
            <img id="p1" src="./images/patnaimage1.jpg" alt="Patna during British Occupation" width= "450" height= "370" />
            <img id="p3" src="./images/patnaimage3.jpg" alt="Women surround Religious Monument" width= "320" height= "400"/>
            <img id="p4" src="/images/patnaimage4.jpg" alt="Map of Patna" width= "470" height= "370"/>
            <p>Patna is the capital city of the province Bihar, and is one of the
            oldest continuously inhabited places in the world. It was founded in 490 BCE
            under the name of Pataliputra and borders the Ganges River. This city has played a
            big role in India historically, being a significant  territory during the Delhi Sultanate,
            Mughul Empire, Nawabs of Bengal, East India Company, and the British Raj. Patna
            was the center of the First War of Independence and actively participated
            in India's independence movement. Patna was the center of a lot of art and education
            and has been associated with two ancient religions, Buddhism and Jainism.</p>


                    <a name="Sherghati"></a>
              <h3>Sherghati</h3>
              <img id="s3" src="/images/sherghatiimage3.jpg" alt="Drawing of a hills in Sherghati" width= "340" height= "290"/>
              <img id="s2" src="/images/sherghatiimage2.jpg" alt="Shergotty meteorite" width= "410" height= "310"/>
              <img id="s1" src="/images/sherghatiimage1.jpg" alt="Sherghati landscape" width= "460" height= "290"/>
              <p> Sherghati is a town in Bihar, India in the Gaya district and is surrounded
              by the Morhar River. It translates to “The Valley of Lions” to honor the brave
              people that lived there. It was under the rule of the British Raj until in 1857 the
              monarch, Raja Jehangir Khan Bux, revolted against the British.  Their main
              industry is agriculturally based, the major crops grown are rice, wheat, legume,
              groundnut, and sugarcane. In 1865, a meteorite from Mars landed in Sherghati,
              but was confiscated by colonisers and resides in a London museum as the
              “Shergotty meteorite”.</p>


                    <a name="Example1"></a>
              <h3>Example1</h3>
              <img src="https://cdn.britannica.com/99/94299-050-4FD6184B/Hawaii-cliffs-state-waters-Tourists-Pacific-Ocean.jpg"width="350" height="350"/>
              <p>Hawaii is the world’s largest island chain, and it’s the only U.S. state
              completely made up of islands. But only 7 of its 132 islands are inhabited: Hawaii
              (also known as the Big Island), Maui, Molokai, Lanai, Oahu, Kauai, and Niihau.</p>

                <a name="Example2"></a>
              <h3>Example2</h3>
              <img src="https://eng.taiwan.net.tw/att/topBackground2018/20_0002004.jpg" width="770" height="350"/>
              <p>Located off the southeast coast of the Asian Continent at the western edge
              of the Pacific Ocean, between Japan and the Philippines and right in the center
              of the East-Asian island arc, Taiwan forms a vital line of communication in the
              Asia-Pacific region. It covers an area of approximately 36,000 square kilometers
              (14,400 square miles) and is longer than it is wide. Two-thirds of the total area is
              covered by forested mountains and the remaining area consists of hilly country,
              platforms and highlands, coastal plains and basins. The Central Mountain Range
              stretches along the entire country from north to south, thus forming a natural line of
              demarcation for rivers on the eastern and western sides of the island. On the west
              side, lies the Yushan (Yu Mountain) Range with its main peak reaching 3,952 meters,
              the highest mountain peak in Northeast Asia.</p>

                <a name="Example3"></a>
              <h3>Example3</h3>
              <img src="https://www.morocco.com/wp-content/themes/geo-sites-new/assets//img/morocco_footer_images_6.jpg" height="350"/>
              <p>Morocco (the full Arabic name is Al Mamlakah al Maghribiyah which
                translates into "The Western Kingdom" ) is located on the North West coast
                of Africa and has ports in the North Atlantic Ocean as well as the Mediterranean
                Sea. It is the third most populous Arab country. Morocco shares the largest
                part of its border with Algeria to the East and Western Saharah to the South.
                Morocco is divided into sixteen regions. Each region is further divided into
                provinces and prefectures. The capital of Morocco is Rabat and its largest city is
                Casablanca. The national currency is the Moroccan Dirham.</p>

        </body>
        <Footer/>
      </div>

    )
  }

}

export default history2;
