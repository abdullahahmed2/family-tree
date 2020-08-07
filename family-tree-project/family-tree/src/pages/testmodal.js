import React, {useState} from 'react';
import Modal from 'react-modal';
import './testmodal.css';
import Mcontent from './Mcontent.js';


const Testmodal = () => {

        const [modalIsOpen, setModalIsOpen]= useState(false)
        return(

            <body >
                <div className="Testmodal">

                    <div>
                        <button onClick = {() => setModalIsOpen(true)}>Edit Profile</button>
                    </div>

                    <div>
                        <Modal className="modalbody" isOpen={modalIsOpen} >


                        <div>
                            <button onClick={() => setModalIsOpen(false)}>Close</button>
                        </div>

                        <Mcontent/>

                        </Modal>
                    </div>

                  </div>
              </body>
      )
}

export default Testmodal;
