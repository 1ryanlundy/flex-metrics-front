import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function NavBar() {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand className="navbrand" as={Link} to="/">FlexMetrics</Navbar.Brand>
                <Nav className="me-auto">
                    {/* <Nav.Link as={Link} to="/logs" >Logs</Nav.Link> */}
                    {/* <Nav.Link href="#home">New Log</Nav.Link> */}
                    <NavDropdown title="Logs" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/logs">View Logs</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/logs/new">Create New Log</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/logs/edit">Edit Log</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>


                    </NavDropdown>
                    {/* <button>
                        <Link to="/logs/new">New Log</Link>
                    </button> */}
                </Nav>
            </Container>
        </Navbar>
    )
}