import React, { Component } from 'react'
import styled from 'styled-components';

const StyledFooter = styled.footer`
    font-family: Montserrat, sans-serif;
    text-align: center;
    bottom: 0;
`
export default class Footer extends Component {
    render() {
        return (
            <StyledFooter className='mobile-hide'>
                <div>
                    <small>
                        <span role='img' aria-label='Made by Andres Romero'>
                            © {new Date().getFullYear()} | Andres Romero | Made with ❤️
                        </span>
                    </small>
                </div>
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
