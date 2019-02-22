import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class CelestialCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            planetName: '',
            description: '',
            habitable: '',
            image: ''

        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log(this.state.image);
        event.preventDefault();
        fetch(`http://localhost:3000/log/`, {
            method: 'POST',
            body: JSON.stringify({ log: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => res.json())
        .then((logData) => {
            this.props.updateCelestialsArray();
            this.setState({
                id: '',
                planetName: '',
                description: '',
                habitable: '',
                image: ''
            })
        })
    }
    render() {
        return (
            <div>
                <h3>New Planet???</h3>
                <hr />
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="planetName">Planet Name</Label>
                        <Input id="planetName" type="text" name="planetName" placeholder="Planet Name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Habitable?">Habitable?</Label>
                        <Input type="select" name="habitable"  onChange={this.handleChange} placeholder="Type">
                            <option></option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value="Are you kidding?">Are you kidding?</option>
                            <option value="Not for a very very very very very very very long time.">Not for a very very very very very very very long time.</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input id="description" type="text" name="description" value={this.state.description} placeholder="enter description" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Picture URL">Picture URL</Label>
                        <Input id="image" type="text" name="image" value={this.state.image} placeholder="Enter Image URL" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" color="primary"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default CelestialCreate;