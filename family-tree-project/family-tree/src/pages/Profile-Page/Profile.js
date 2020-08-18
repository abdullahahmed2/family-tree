import React from 'react';
import './Profile.css';
import Header from '../Homepage/Header.js';
import Footer from '../Homepage/Footer.js';


class Profile extends React.Component {

  render() {
    return(

       <body>

            <Header/>


          <form method='post' id='Profile' action=''>

                <div className='profileinfo'>
                    <div className='profileinfo1'>
                        <ul>
                          <li className='profileinfomyp'><a>My Profile</a></li>
                          <li className='profileinfomyf'><a>My Family</a></li>
                        </ul>
                    </div>
                    <h1>Your Profile </h1>
                </div>





                  <div className="nameprofile">
                    <label for='Fname'>Name:</label><br/>


                    <input
                        type='text'
                        name='Firstname'
                        id='Fnameprofile'
                        maxLength={15}
                        placeholder='First name'
                        required />


                    <input
                        type='text'
                        name='Middlename'
                        id='Mnameprofile'
                        maxLength={15}
                        placeholder='Middle name'
                        required/>

                    <input
                        type='text'
                        name='Lastname'
                        id='Lnameprofile'
                        maxLength={15}
                        placeholder='Last name'
                        required/><br/><br/>
                </div>
                <div className= "DOBprofile">
                       <label for='dob'>Date of Birth:</label><br/>
                       <input
                            type='date'
                            name='date-of-birth'
                            id='dobprofile'
                            placeholder='dd/mm/yyyy'
                            required/><br/><br/>
                </div>


                <div className="fathernameprofile">
                  <label for='Fname'>Father's Name:</label><br/>


                  <input
                      type='text'
                      name='Firstname'
                      id='Fnameprofile'
                      maxLength={15}
                      placeholder='First name'
                      required />


                  <input
                      type='text'
                      name='Middlename'
                      id='Mnameprofile'
                      maxLength={15}
                      placeholder='Middle name'
                      required/>

                  <input
                      type='text'
                      name='Lastname'
                      id='Lnameprofile'
                      maxLength={15}
                      placeholder='Last name'
                      required/><br/><br/>
                </div>


                <div className="mothernameprofile">
                <label for='Fname'>Mother's Name:</label><br/>


                <input
                    type='text'
                    name='Firstname'
                    id='Fnameprofile'
                    maxLength={15}
                    placeholder='First name'
                    required />


                <input
                    type='text'
                    name='Middlename'
                    id='Mnameprofile'
                    maxLength={15}
                    placeholder='Middle name'
                    required/>

                <input
                    type='text'
                    name='Lastname'
                    id='Lnameprofile'
                    maxLength={15}
                    placeholder='Last name'
                    required/><br/><br/>
                </div>









                   <div className="numberprofile">
                        <label for="Mnumprofile">Mobile number: </label><br/>
                        <select id='phoneprofile'>
                          <option>+92</option>
                          <option>+1</option>
                        </select>
                        <input
                            type='tel'
                            placeholder='Mobile number'
                            name='Mobile number'
                            id='Mnumprofile'
                            maxLength={10}
                            required ></input><br/><br/>
                   </div>



                   <div className="Emailprofile">
                        <label for="email">Email: </label><br />
                        <input
                            type='Email'
                            name='email'
                            id='emailprofile'
                            placeholder='example@gmail.com'
                            required></input><br/><br />
                   </div>





         </form>

       <Footer/>
      </body>
    );
  }
}






export default Profile;
