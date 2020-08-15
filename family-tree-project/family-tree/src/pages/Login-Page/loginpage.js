import React, {Component} from 'react';
import './loginpage.css';
import {Button, Form, FormGroup, Label, Input}
    from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';
import Header from "../Homepage/Header.js";
import Footer from "../Homepage/Footer.js";


class Login extends Component{
  render(){
    return(

      <body>

        <Header/>

       <Form className ='login-form'>
           <h1 className='login'> Log In </h1>


           <FormGroup className='input-box'>
             <Label className = "email"></Label>
             <div>
             <input type='email' placeholder='Email Address'/>
             </div>

             <Label className = "password"></Label>
             <div>
             <input type = 'password' placeholder ='Password'/>
             </div>
           </FormGroup>


           <FormGroup>
             <Button className='btn btn-block btn-lg btn-dark'>Login</Button>

             <div className='text-center pt-4'>
                or continue with your social account
             </div>

             <FacebookLoginButton className='mt-3 mb-3'/>

             <div className = 'text-center'>
               <a href ='/name' className='text'>Sign Up?</a>
               <span className='p-2'>|</span>
               <a href='/forgot' className='text'>Forgot Password?</a>
             </div>

           </FormGroup>

       </Form>

       <Footer/>

      </body>

    )
  }
}
export default Login;
