import React from 'react';
import './RCName.css';

class RCName extends React.Component {
  render() {
    return(

       <body>

        <div className="box">

          <form method='post' id='register' action=''>

              <h1> Register </h1> <br/><br/>


              <div className="name">
                <label for='Fname'>Name:</label><br/>
                <input type='text' name='Firstname' id='Fname' maxLength={10} placeholder='First name' required/>

                <input type='text' name='Middlename' id='Mname' maxLength={10} placeholder='Middle name' required/>

                <input type='text' name='Lastname' id='Lname' maxLength={10} placeholder='Last name' required/><br/><br/>
             </div>



             <div className= "DOB">
                <label for='dob'>Date of Birth:</label><br/>
                <input type='date' name='date-of-birth' id='dob' placeholder='mm/dd/yyyy' required/> <br/><br/>
             </div>



           <div className="number">
                <label for="Mnum">Mobile number: </label><br/>
                <select id='phone'>
                  <option>+92</option>
                  <option>+1</option>
                </select>
                <input type='tel' placeholder='Mobile number' name='Mobile number' id='Mnum' maxLength={10} required ></input><br/><br/>
           </div>



           <div className="Email">
                <label for="email">Email: </label><br />
                <input type='Email' name='email' id='email' placeholder='example@gmail.com' required></input><br /><br />
           </div>



           <div className="Password">
                <label for="password">Password: </label><br />
                <input type='Password' name='pass' id='password' placeholder='password' required></input><br /><br />


                <label for="Rpassword">Repeat password:</label><br />
                <input type='Password' name='pass' id='Rpassword' placeholder='Re-enter password' required></input> <br/> <br/><br/><br/>
           </div>



           <div id="Gender">

            <div className= "Gender">
              <label> Gender </label> <br/>
            </div>

             <label for="gender">Male:</label>&nbsp;
             <input type="radio" id="male" name="gender" value="male"></input>&nbsp; <br/>

             <label for= "Female">Female:</label>&nbsp;
             <input type="radio" id="female" name="gender" value="female"></input> <br/><br/>

          </div>


          <div className="Submit">
             <input type="submit" value="Submit" className="submit" />
          </div>
         </form>
       </div>
      </body>
    );
  }
}

export default RCName;
