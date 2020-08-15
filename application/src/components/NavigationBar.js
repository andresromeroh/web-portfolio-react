import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default class NavigationBar extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar className="portfolio-navbar gradient" expand="lg" fixed="top"  >
                    <Container>
                        <Navbar.Brand className="logo brand" href="#">
                            <span role="img" aria-label="computer">💻 andresromero.dev</span>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                        <Navbar.Collapse>
                            <Nav className="nav navbar-nav ml-auto">
                                <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
                                <Nav.Link className="nav-link" href="#link">Projects</Nav.Link>
                                <Nav.Link className="nav-link" href="#home">Experience</Nav.Link>
                                <Nav.Link className="nav-link" href="#link">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </React.Fragment>
        )
    }
}
