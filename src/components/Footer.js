import React, { Component } from 'react'
import { Container } from 'react-bootstrap';

const footStyle = {
    fontFamily: 'Montserrat, sans-serif',
    textAlign: 'center',
    marginTop: '50px',
    marginBottom: '40px'
};

const anchorStyle = {
    marginRight: '50px'
};

export default class Footer extends Component {
    render() {
        return (
            <Container className='page-footer' style={footStyle}>
                <hr></hr>
                <div className='links'>
                    <a href='/about' style={anchorStyle}>About</a>
                    <a href='/projects' style={anchorStyle}>Projects</a>
                    <a href='/contact' style={anchorStyle}>Email</a>
                    <a href='/projects' style={anchorStyle}>GitHub</a>
                </div>
            </Container>
        )
    }
}
