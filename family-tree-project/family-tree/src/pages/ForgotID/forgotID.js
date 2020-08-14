import React from 'react';
import './forgotID.css';

class ForgotID extends React.Component{
  render() {
    return (
      <div className='box'>


       <form className='forgot'>

        <p>A code will be sent to the email provided by you below</p>
        <input type='email' placeholder='example@gmail.com'/>

       </form>

       <input className='submit' type='submit' value='submit' className='submit' />


    </div>
    )
  }

}

export default ForgotID;
