import React from 'react';
import './Mcontent.css';

class Mcontent extends React.Component {
  render() {
    return(

       <body>

        <div className="box1">

          <form method='post' id='editprofile' action=''>

              <h1> Register </h1> <br/><br/>


              <div className="name1">
                <label for='Fname'>Name:</label><br/>
                <input type='text' name='Firstname' id='Fname1' maxLength={10} placeholder='First name' required/><br/><br/>

                <input type='text' name='Middlename' id='Mname1' maxLength={10} placeholder='Middle name' required/><br/><br/>

                <input type='text' name='Lastname' id='Lname1' maxLength={10} placeholder='Last name' required/><br/><br/>
             </div>



             <div className= "DOB1">
                <label for='dob'>Date of Birth:</label><br/>
                <input type='date' name='date-of-birth' id='dob1' placeholder='mm/dd/yyyy' required/> <br/><br/>
             </div>



           <div className="number1">
                <label for="Mnum">Mobile number: </label><br/>
                <select id='phone1'>
                  <option>+92</option>
                  <option>+1</option>
                </select>
                <input type='tel' placeholder='Mobile number' name='Mobile number' id='Mnum1' maxLength={10} required ></input><br/><br/>
           </div>



           <div className="Email1">
                <label for="email">Email: </label><br />
                <input type='Email' name='email' id='email1' placeholder='example@gmail.com' required></input><br /><br />
           </div>



           <div className="Password1">
                <label for="password">Password: </label><br />
                <input type='Password' name='pass' id='password1' placeholder='password' required></input><br /><br />


                <label for="Rpassword">Repeat password:</label><br />
                <input type='Password' name='pass' id='Rpassword1' placeholder='Re-enter password' required></input> <br/> <br/><br/><br/>
           </div>



           <div id="Gender1">

              <div className= "Gender1">
                <label> Gender </label> <br/>
              </div>

               <label for="gender">Male</label>&nbsp;
               <input type="radio" id="male1" name="gender" value="male"></input>&nbsp; <br/>

               <label for= "Female">Female</label>&nbsp;
               <input type="radio" id="female1" name="gender" value="female"></input> <br/><br/>

          </div>


          <div className="Submit1">
             <input type="submit" value="Submit" className="submit1" />
          </div>
         </form>
       </div>
      </body>
    );
  }
}

export default Mcontent;
