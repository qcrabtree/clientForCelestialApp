import React from 'react';
import { Table, Button } from 'reactstrap';


const CelestialTable = (props) => {

    return (
        <div>
            <h3>Planet Log</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Planet Name</th>
                        <th>Habitable</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.celestials.map((celestial, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{celestial.id}</th>
                                    <td>{celestial.planetName}</td>
                                    <td>{celestial.habitable}</td>
                                    <td>{celestial.description}</td>
                                    <td>{celestial.image}</td>
                                    <td>
                                        <Button id={celestial.id} onClick={props.delete} color="primary">Delete</Button>|
                                        <Button id={celestial.id} onClick={e => props.update(e, celestial)} color="secondary">Update</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default CelestialTable;