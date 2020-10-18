import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Navbar className='portfolio-navbar gradient' expand='lg' fixed='top'>
                    <Container>
                        <Navbar.Brand className='logo brand' href='/'>
                            <span role='img' aria-label='computer'>💻 andresromero.dev</span>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                            <Nav className='nav navbar-nav ml-auto'>
                                <Link className='nav-link' to='/'>About</Link>
                                <Link className='nav-link' to='/projects'>Projects</Link>
                                <Link className='nav-link' to='/experience'>Experience</Link>
                                <Link className='nav-link' to='/contact'>Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
