import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class NavigationBar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            opacity: 1,
            lastScrollPosition: 0,
            hidden: false
        }
    }

    componentDidMount() {
        if (typeof window !== "undefined") {
            window.onscroll = () => {
                let currentScrollPos = window.pageYOffset;
                let maxScroll = document.body.scrollHeight - window.innerHeight;
                if (currentScrollPos > 0 && currentScrollPos < maxScroll
                    && currentScrollPos > this.state.lastScrollPosition) {
                    if ((maxScroll - currentScrollPos) < maxScroll * 0.25) {
                        this.setState({
                            opacity: 0,
                            lastScrollPosition: currentScrollPos,
                            hidden: true
                        })
                    } else {
                        this.setState((prevState) => ({
                            opacity: prevState.opacity - 0.05,
                            lastScrollPosition: currentScrollPos
                        }))
                    }
                } else {
                    if ((maxScroll - currentScrollPos) > maxScroll * 0.25) {
                        this.setState({
                            opacity: 1,
                            lastScrollPosition: currentScrollPos,
                        })
                    } else {
                        this.setState((prevState) => ({
                            opacity: prevState.opacity + 0.05,
                            lastScrollPosition: currentScrollPos,
                            hidden: false
                        }))
                    }
                }
            }
        }
    }

    render() {
        return (
            <Navbar id='navbar' className='portfolio-navbar gradient' expand='lg' fixed='top'
                style={{ opacity: `${this.state.opacity}`, display: this.state.hidden ? "none" : "" }}>
                <Container>
                    <Navbar.Brand className='logo brand' href='/'>
                        <span role='img' aria-label='computer'>• ANDRESROMERO.DEV •</span>
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
        )
    }
}
