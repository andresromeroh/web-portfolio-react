
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Dog from '../assets/images/404.png';

export default class ProfileIntro extends Component {
    render() {
        return (
            <Container className='block'>
                <img className='mt-5' src={Dog} alt='Dog' style={{ height: 400, width: 400 }} />
                <h2 className='mb-5'>HTTP 404: A dog ate this page!</h2>
            </Container>
        )
    }
}
