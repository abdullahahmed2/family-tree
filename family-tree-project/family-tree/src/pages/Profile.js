import React from 'react';
import './Profile.css';
import Profiledata from './edit-profile-data.json';

class Profile extends React.Component {

  render() {
    return(

       <body>

       {Profiledata.map(profileinfo => (
        <div className="box1">

          <form method='post' id='editprofile' action=''>

              <h1> Profile </h1> <br/><br/>


                  <div className="name1">
                    <label for='Fname'>Name:</label><br/>


                    <input
                        type='text'
                        name='Firstname'
                        id='Fname1'
                        maxLength={10}
                        placeholder='First name'
                        value={profileinfo.FirstName}
                        required /><br/><br/>


                    <input
                        type='text'
                        name='Middlename'
                        id='Mname1'
                        maxLength={10}
                        placeholder='Middle name'
                        value={profileinfo.MiddleName}
                        required/><br/><br/>

                    <input
                        type='text'
                        name='Lastname'
                        id='Lname1'
                        maxLength={10}
                        placeholder='Last name'
                        value={profileinfo.LastName}
                        required/><br/><br/>
                 </div>



                 <div className= "DOB1">
                        <label for='dob'>Date of Birth:</label><br/>
                        <input
                            type='date'
                            name='date-of-birth'
                            id='dob1'
                            placeholder='dd/mm/yyyy'
                            value={profileinfo.Dateofbirth}
                            required/><br/><br/>
                 </div>



                   <div className="number1">
                        <label for="Mnum">Mobile number: </label><br/>
                        <select
                            id='phone1'
                            value={profileinfo.Countrycode}>
                          <option>+92</option>
                          <option>+1</option>
                        </select>
                        <input
                            type='tel'
                            placeholder='Mobile number'
                            name='Mobile number'
                            id='Mnum1'
                            maxLength={10}
                            value={profileinfo.MobileNumber}
                            required ></input><br/><br/>
                   </div>



                   <div className="Email1">
                        <label for="email">Email: </label><br />
                        <input
                            type='Email'
                            name='email'
                            id='email1'
                            placeholder='example@gmail.com'
                            value={profileinfo.Email}
                            required></input><br/><br />
                   </div>



                  <div className="Submit1">
                     <input type="submit" value="Save Changes" className="submit1" />
                  </div>

         </form>
       </div>
       ))}
      </body>
    );
  }
}





export default Profile;
