import React, {
    Component
} from 'react';
import './loginpage.css';
import {
    Form,
    FormGroup,
    Label,
} from 'reactstrap';
import {
    FacebookLoginButton
} from 'react-social-login-buttons';
import Header from "../Homepage/Header.js";
import Footer from "../Homepage/Footer.js";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log(data)
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.email]: event.target.value
        })
    }

    render() {
        const {email} = this.state.email
        const {password} = this.state.password

        return (
            <body >
                <Header / >

                <Form className = 'login-form' onSubmit = {this.handleSubmit} >
                <h1 className = 'login' > Log In </h1>

                <FormGroup className = 'input-box' >
                    <p > Email: {email} < /p>
                    <Label className = "email" > < /Label>
                    <div >
                        <input type = 'email' placeholder = 'Email Address' onChange = {this.handleInputChange}/>
                    </div>

                    <Label className = "password" > </Label>
                    <div>
                        <input type = 'password' placeholder = 'Password' onChange = {this.handleInputChange}/>
                    </div>
                </FormGroup>


                <FormGroup >
                    <div >
                        <input type = "submit" value = "Submit" className = "'btn btn-block btn-lg btn-dark" / >
                    </div>

                    <div className = 'text-center pt-4' >
                        Or continue with your social account
                    </div>

                    <FacebookLoginButton className = 'mt-3 mb-3' / >

                    <div className = 'text-center' >
                        <a href = '/name' className = 'text' > Sign Up ? < /a>
                        <span className = 'p-2' > | < /span>
                        <a href = '/forgot' className = 'text' > Forgot Password ? < /a>
                    </div>

                </FormGroup>

                </Form>

                <Footer / >

            </body>

        )
    }
}
export default Login;
