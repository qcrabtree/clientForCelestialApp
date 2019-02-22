import React from 'react';
import Signup from './Signup';
import Login from './Login';
import './auth.css';
import { Container, Row, Col } from 'reactstrap';

const Auth = (props) => {
    return (
        <Container className="auth-container">
            <Row>
                <Col md="6">
                     <Signup setToken={props.setToken} />
                </Col>
                <Col md="6" className="login-col">
                     <Login setToken={props.setToken} />
                </Col>
            </Row>
        </Container>
    )
}
export default Auth;