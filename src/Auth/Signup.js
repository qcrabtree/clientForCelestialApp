import React, { Component } from "react";
import '../css/signupLogin.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../helpers/environment';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        };
    }


    handleChange = (event) => {

        this.setState({

            [event.target.name]: event.target.value,
        });
    }


    handleSubmit = (event) => {
       fetch(`${APIURL}user/user`, {
           method: 'POST',
           body: JSON.stringify({ user:this.state }),
           headers: new Headers({
               'Content-Type': 'application/json'
           })
       }).then(
           (response) => response.json()
       ).then((data) => {
           
           this.props.setToken(data.sessionToken)
       })
       event.preventDefault()
    }
    render() {
        return (
            <div>
                <h2>Signup</h2>

                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="username"></Label>
                        <Input id="li_username" type="email" name="email" placeholder="enter email" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password"></Label>
                        <Input id="li_password" type="password" name="password" minlength="5" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit"> Submit</Button>
                </Form>
            </div>
        )
    }
}
export default Signup;