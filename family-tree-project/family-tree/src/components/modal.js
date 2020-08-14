import React, {useState} from 'react';
import Modal from 'react-modal';
import './modal.css';



const Testmodal = () => {

        const [modalIsOpen, setModalIsOpen]= useState(false)
        return(

            <body className="Testmodal">


                    <div className='buttonopen' >
                        <button className='button' onClick = {() => setModalIsOpen(true)}>Edit Profile</button>
                    </div>

                    <div className="modalbody">
                        <Modal  isOpen={modalIsOpen} >




                        <div className='buttonclose'>
                            <button  onClick={() => setModalIsOpen(false)}>Close</button>
                        </div>

                        </Modal>
                    </div>


              </body>
      )
}

export default Testmodal;
