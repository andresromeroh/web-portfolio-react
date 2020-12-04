import React, { Component } from 'react'
import styled from 'styled-components';

const StyledFooter = styled.footer`
    font-family: Montserrat, sans-serif;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 40px;
`
export default class Footer extends Component {
    render() {
        return (
            <StyledFooter>
                <hr></hr>
                <div className='links'>
                    <a className='p-3' href='/'>About</a>
                    <a className='p-3' href='/projects'>Projects</a>
                    <a className='p-3' href='/contact'>Email</a>
                    <a className='p-3' href='/projects'>GitHub</a>
                </div>
            </StyledFooter>
        )
    }
}
