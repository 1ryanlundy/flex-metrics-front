import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function NavBar() {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand className="navbrand" as={Link} to="/">FlexMetrics</Navbar.Brand>
                <Nav className="me-auto">
                    {/* <Nav.Link href="#home">Logs</Nav.Link> */}
                    <Nav.Link as={Link} to="/logs" >Logs</Nav.Link>
                    {/* <Nav.Link href="#pricing">Workouts</Nav.Link> */}
                </Nav>
            </Container>
        </Navbar>
    )
}