import React, {Component} from 'react';
import './Page.css';
import {Button, Form, FormGroup, Label, Input}
    from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';
class Page extends Component{
  render(){
    return(
     <Form className ='login-form'>
      <h1 className='text-center'> Sign In </h1>
       <FormGroup className='input-box'>
       <Label>Email Address</Label>
       <div> <input type='email' placeholder='Email Address'/> </div>
       <Label>Password</Label>
       <div><input type = 'password' placeholder ='Password'/></div>
       </FormGroup>
       <FormGroup>
       <Button className='btn btn-block btn-lg btn-dark'>Login</Button>
       <div className='text-center pt-4'>
          or continue with your social account
       </div>
       <FacebookLoginButton className='mt-3 mb-3'/>
       <div className = 'text-center'>
       <a href ='#' className='text'>Sign Up?</a>
       <span className='p-2'>|</span>
       <a href='#' className='text'>Forgot Password?</a>
       </div>
       </FormGroup>


     </Form>



    );
  }
}
export default Page;
