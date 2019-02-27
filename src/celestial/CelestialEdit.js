import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

class CelestialEdit extends React.Component {

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

    componentWillMount() {
        this.setState({
            id: this.props.celestial.id,
            planetName: this.props.celestial.planetName,
            habitable: this.props.celestial.habitable,
            description: this.props.celestial.description,
            image: this.props.celestial.image
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }


    render() {
        return (
            <div>
                <Modal isOpen={true} >
                <ModalHeader >Planet Updater</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleSubmit} >
                        <FormGroup>
                            <Label for="planetName">Planet Name</Label>
                            <Input id="planetName" type="text" name="planetName" value={this.state.planetName}
                            placeholder="Planet Name" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="habitable">Habitable?</Label>
                            <Input type="select" name="habitable" value={this.state.habitable} onChange={this.handleChange} placeholder="Type">
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
                            <Label for="image">Image URL</Label>
                            <Input id="image" image="text" name="image" value={this.state.image} placeholder="enter image URL" onChange={this.handleChange} />
                        </FormGroup>
                        <Button type="submit" color="primary">Submit</Button>
                    </Form>
                </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default CelestialEdit;