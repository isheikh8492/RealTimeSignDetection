import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, Container} from 'react-bootstrap'


const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Real-Time Sign Detection</Navbar.Brand>
        <Nav className="me">
            <Nav.Link href="About">Created by Imaduddin Sheikh</Nav.Link>
        </Nav>
        </Container>
        </Navbar>
    )
}

export default NavigationBar;