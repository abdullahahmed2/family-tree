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
                          <li className='profileinfomyp'><a href='/profile'>My Profile</a></li>
                          <li className='profileinfomyf'><a href='/myfamily'>My Family</a></li>
                        </ul>
                    </div>
                    <h1>My Family</h1>
                </div>


                <div className="siblingsnameprofile">
                <label for='Fname'>Sibling(s):</label><br/>


                <input
                    type='text'
                    name='Firstname'
                    id='Fnameprofile'
                    maxLength={15}
                    placeholder='First name'
                    required />&nbsp;


                <input
                    type='text'
                    name='Middlename'
                    id='Mnameprofile'
                    maxLength={15}
                    placeholder='Middle name'
                    required/>&nbsp;

                <input
                    type='text'
                    name='Lastname'
                    id='Lnameprofile'
                    maxLength={15}
                    placeholder='Last name'
                    required/><br/><br/>
                </div>


                <div className="spousesnameprofile">
                <label for='Fname'> Spouse's Name:</label><br/>


                <input
                    type='text'
                    name='Firstname'
                    id='Fnameprofile'
                    maxLength={15}
                    placeholder='First name'
                    required />&nbsp;


                <input
                    type='text'
                    name='Middlename'
                    id='Mnameprofile'
                    maxLength={15}
                    placeholder='Middle name'
                    required/>&nbsp;

                <input
                    type='text'
                    name='Lastname'
                    id='Lnameprofile'
                    maxLength={15}
                    placeholder='Last name'
                    required/><br/><br/>
                </div>
                <div className="childrennameprofile">
                <label for='Fname'>Children:</label><br/>


                <input
                    type='text'
                    name='Firstname'
                    id='Fnameprofile'
                    maxLength={15}
                    placeholder='First name'
                    required />&nbsp;


                <input
                    type='text'
                    name='Middlename'
                    id='Mnameprofile'
                    maxLength={15}
                    placeholder='Middle name'
                    required/>&nbsp;

                <input
                    type='text'
                    name='Lastname'
                    id='Lnameprofile'
                    maxLength={15}
                    placeholder='Last name'
                    required/><br/><br/>
                </div>


         </form>

       <Footer/>
      </body>
    );
  }
}






export default Profile;
