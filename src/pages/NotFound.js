
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Dog from '../assets/images/dog_ate_page.png';

export default class ProfileIntro extends Component {
    render() {
        return (
            <Container className='block'>
                <img src={Dog} alt='Dog' style={{ height: 500, width: 500 }} />
                <h2>I'm sorry my dog ate this page :(</h2>
            </Container>
        )
    }
}
