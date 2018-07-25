import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./sass/login.scss";
import sha256 from 'crypto-js/sha256';

const salt = 'entropy';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    validateFormFunction() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        // From JSON Server API Call
        // let payload = {
        //     "email": this.state.email,
        //     "password": this.state.password
        // }
        // payload = JSON.stringify(payload);
        // fetch('http://localhost:3000/login')
        //     .then(function (res) {
        //         debugger;
        //         response => response.json()
        //     })

        // Fetching Stored Json From Session Storage
        let storedJson = localStorage.getItem('userObj');
        storedJson = JSON.parse(storedJson);
        let password = sha256(this.state.password + salt);
        if (storedJson.email === this.state.email && JSON.stringify(storedJson.password) == JSON.stringify(password)) {
            // Redirect to Home Page
            this.props.history.push("/home");
        } else {
            // Restrict to Login Page
            alert('Password is Incorrect');
        }
    }


    render() {
        return (
            <div className="login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateFormFunction()}
                        type="submit">
                        Login</Button>
                </form>
            </div>
        );
    }
}