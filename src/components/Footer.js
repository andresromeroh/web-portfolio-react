import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    font-family: Montserrat, sans-serif;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 40px;
`
const Anchor = styled.a`
    margin-right: 50px
`

export default class Footer extends Component {
    render() {
        return (
            <Container>
                <StyledFooter>
                    <hr></hr>
                    <div className='links'>
                        <Anchor href='/'>About</Anchor>
                        <Anchor href='/projects'>Projects</Anchor>
                        <Anchor href='/contact'>Email</Anchor>
                        <Anchor href='/projects'>GitHub</Anchor>
                    </div>
                </StyledFooter>
            </Container>
        )
    }
}
