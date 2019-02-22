import React, { Component } from 'react';
import CelestialCreate from './CelestialCreate';
import { Container, Row, Col } from 'reactstrap';
import CelestialTable from './CelestialTable';
import CelestialEdit from './CelestialEdit';
import CelestialCarousel from './CelestialCarousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import APIURL from '../helpers/environment'
class CelestialIndex extends Component{

    constructor(props) {
        super(props)
        this.state = {
            celestials: [],
            updatePressed: false,
            celestialToUpdate: {}
        //     planetName:'',
        //     habitable:'',
        //     description:'',
        //     image:''
        }
    }

    componentWillMount() {
        this.fetchCelestials()
    }


    fetchCelestials = () => {
        fetch(`${APIURL}/log/`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => res.json())
        .then((logData) => {
            return this.setState({ celestials: logData })
        })
    }


    celestialUpdate = (event, celestial) => {
        console.log(celestial);
        fetch(`${APIURL}/log/${celestial.id}`, {
            method: 'PUT',
            body: JSON.stringify({ log: celestial  }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => {
            this.setState({ updatePressed: false })
            this.fetchCelestials();
        })
    }



    setUpdatedCelestial = (event, celestial) => {
        this.setState({
            celestialToUpdate: celestial,
            updatePressed: true
        })
    }

    
    celestialDelete = (event) => {
        fetch(`${APIURL}/log/${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ log: { id: event.target.id } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then((res) => this.fetchCelestials())
    }





    render() {
        const celestials = this.state.celestials.length >= 1 ?
          <CelestialTable celestials={this.state.celestials} delete={this.celestialDelete} update={this.setUpdatedCelestial} /> :
          <h2>Log a planet!</h2>
        return (
          <Container>
            <Row>
              <Col md="12">
                  <CelestialCarousel celestials = {this.state.celestials}/>
                
              </Col>
            </Row>
            <Row>
                <Col>
                <CelestialCreate token={this.props.token} updateCelestialsArray={this.fetchCelestials} />
                </Col>
              <Col md="9">
              {celestials}
              </Col>
            </Row>

            <Col md="12">
             {

                 this.state.updatePressed ? <CelestialEdit t={this.state.updatePressed} update={this.celestialUpdate} celestial={this.state.celestialToUpdate} />
                : <div></div>
                }

            
            
            
            </Col>
          </Container>
        )
      }
}

export default CelestialIndex;