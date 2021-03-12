import React, { Component } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    font-family: Montserrat, sans-serif;
    text-align: center;
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 100px;
    width: 100%;
    overflow: hidden;
    border-style: solid;
    border-width: 0.1px;
    border-color: rgba(0,0,0,.125);
`
export default class Footer extends Component {
    render() {
        return (
            <StyledFooter>
                <div className='links' style={{marginTop: '1%', marginBottom: '1%'}}>
                    <a className='p-3' href='/'>About Me</a>
                    <a className='p-3' href='/projects'>Projects</a>
                    <a className='p-3' href='/contact'>E-mail</a>
                    <a 
                        className='p-3' 
                        href='https://www.linkedin.com/in/andresromeroh/' 
                        target='_blank'
                        rel='noreferrer'>
                        LinkedIn
                    </a>
                </div>
                <div style={{}}>
                    <small>
                        <span role='img' aria-label='Made by Andres Romero'>
                            © {new Date().getFullYear()} | Andres Romero | Made with ❤️
                        </span>
                    </small>
                </div>
            </StyledFooter>
        )
    }
}
