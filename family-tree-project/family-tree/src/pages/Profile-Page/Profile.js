import React from 'react';
import './Profile.css';


class Profile extends React.Component {

  render() {
    return(

       <body>

       {Profiledata.map(profileinfo  => (
        <div className="boxprofile">

          <form method='post' id='editprofile' action=''>

              <h1> Profile </h1> <br/><br/>


                  <div className="nameprofile">
                    <label for='Fname'>Name:</label><br/>


                    <input
                        type='text'
                        name='Firstname'
                        id='Fnameprofile'
                        maxLength={15}
                        placeholder='First name'
                        value={profileinfo.FirstName}
                        required /><br/><br/>


                    <input
                        type='text'
                        name='Middlename'
                        id='Mnameprofile'
                        maxLength={15}
                        placeholder='Middle name'
                        value={profileinfo.MiddleName}
                        required/><br/><br/>

                    <input
                        type='text'
                        name='Lastname'
                        id='Lnameprofile'
                        maxLength={15}
                        placeholder='Last name'
                        value={profileinfo.LastName}
                        required/><br/><br/>
                </div>





              <div className= "DOBprofile">
                     <label for='dob'>Date of Birth:</label><br/>
                     <input
                         type='date'
                         name='date-of-birth'
                         id='dobprofile'
                         placeholder='dd/mm/yyyy'
                         value={profileinfo.Dateofbirth}
                         required/><br/><br/>
              </div>




                   <div className="numberprofile">
                        <label for="Mnum">Mobile number: </label><br/>
                        <select
                            id='phoneprofile'
                            value={profileinfo.Countrycode}>
                          <option>+92</option>
                          <option>+1</option>
                        </select>
                        <input
                            type='tel'
                            placeholder='Mobile number'
                            name='Mobile number'
                            id='Mnumprofile'
                            maxLength={10}
                            value={profileinfo.MobileNumber}
                            required ></input><br/><br/>
                   </div>



                   <div className="Emailprofile">
                        <label for="email">Email: </label><br />
                        <input
                            type='Email'
                            name='email'
                            id='emailprofile'
                            placeholder='example@gmail.com'
                            value={profileinfo.Email}
                            required></input><br/><br />
                   </div>



                  <div className="Submitprofile">
                     <input
                         type="submit"
                         value="Save Changes"
                         className="submitprofile" />
                  </div>

         </form>
       </div>
       ))}
      </body>
    );
  }
}






export default Profile;
