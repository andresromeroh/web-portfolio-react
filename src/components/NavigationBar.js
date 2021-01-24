import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class NavigationBar extends Component {

    constructor(props) {
        super(props);
        const { pathname } = this.props.location;
        this.state = {
            currentPage: pathname,
            opacity: 1
        }
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            window.onscroll = () => {
                let currentScrollPos = window.pageYOffset;
                let maxScroll = document.body.scrollHeight - window.innerHeight;
                if (currentScrollPos > 0 && currentScrollPos <= (maxScroll + 100)) {
                    this.setState({ opacity: 0 });
                } else {
                    this.setState({ opacity: 1 });
                }
            }
        }
    }

    render() {
        const { currentPage } = this.state;
        return (
            <Navbar id='navbar' className='navbar-dark gradient' expand='lg' collapseOnSelect fixed='top'
                style={{ opacity: `${this.state.opacity}`, display: this.state.hidden ? 'none' : '', transition: 'opacity 0.5s' }}>
                <Container>
                    <Navbar.Brand className='logo brand' href='/'>
                        <span className='span-title'>
                            @ Andresromero.dev
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='nav navbar-nav ml-auto'>
                            <Nav.Link name='about' href='/'>
                                <span className={ currentPage === '/' ? 'span-link' : '' }>
                                    About Me
                                </span>
                            </Nav.Link>
                            <Nav.Link name='projects' href='/projects'>
                                <span className={ currentPage === '/projects' ? 'span-link' : '' }>
                                    Projects
                                </span>
                            </Nav.Link>
                            <Nav.Link name='email' href='/contact'>
                                <span className={ currentPage === '/contact' ? 'span-link' : '' }>
                                    E-mail
                                </span>
                            </Nav.Link>
                            <Nav.Link target='_blank' href='https://www.linkedin.com/in/andresromeroh/'>
                                <span>
                                    LinkedIn
                                </span>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default withRouter(props => <NavigationBar {...props}/>);