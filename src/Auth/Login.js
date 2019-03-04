import React, { Component } from "react";
import '../css/signupLogin.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../helpers/environment';

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {};
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`${APIURL}user/login`, {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
        })
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                
                <Form onSubmit= {this.handleSubmit}>
                    <FormGroup>
                        <Label for="username"></Label>
                        <Input id="li_username" type="email" name="username" placeholder="enter username" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password"></Label>
                        <Input id="li_password" type="password" minLength="5" name="password" placeholder="enter password" onChange={this.handleChange}  />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}
export default Login;