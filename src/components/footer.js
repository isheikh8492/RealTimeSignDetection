import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, Container} from 'react-bootstrap'


const FooterBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Created by Imaduddin Sheikh</Navbar.Brand>
        <Nav className="me">
        </Nav>
        </Container>
        </Navbar>
    )
}

export default FooterBar;