import React, { Component } from 'react';
import '../css/navbar.css';
import {
    
    Navbar, 
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    Button,
    Collapse
} from 'reactstrap';


class SiteBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {
        return (
            <div>
                <Navbar color="faded" light expand="md">

                <NavbarBrand href="/" className="NavbarLogo">Celestial App</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button onClick={() => this.props.clickLogout()}>Logout</Button>
                        </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default SiteBar;