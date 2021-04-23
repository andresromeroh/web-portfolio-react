import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import LinkButton from '../shared/LinkButton';
import Avatar from '../assets/images/development.png';
import { FadeInDowDiv } from '../shared/CustomStyled';

const MarginRow = styled(Row)`
    margin-top: 40px;
    position: relative;
    @media (min-width: 768px) {
        transform: translate(-4%, 0%);
    }
    @media (max-width: 768px) {
        transform: translate(3%, 0%);
    }
`
const INTRO =
    <p className='intro-script'>
        Hello! I am <strong style={{ color: '#ef233c' }}>Andrés</strong>. 
        I'm a Full-Stack Software Engineer based in Heredia, Costa Rica. 
        Passionate about Cloud and Web technologies.
    </p>

export default class ProfileIntro extends Component {
    render() {
        return (
            <section className='profile-intro'>
                <Row className='pb-1'>
                    <Col sm='12' md='6' lg='6' xl='6'>
                        <FadeInDowDiv>
                            <Row>
                                <Col>{INTRO}</Col>
                            </Row>
                            <MarginRow className='align-items-center text-center'>
                                <Col>
                                    <LinkButton
                                        text='CHECK MY PROJECTS'
                                        size='lg'
                                        action='/projects'
                                    />
                                </Col>
                            </MarginRow>
                        </FadeInDowDiv>
                    </Col>
                    <Col sm='12' md='6' lg='6' xl='6'>
                        <img className='avatar' src={Avatar} alt='Avatar' />
                    </Col>
                </Row>
            </section>
        )
    }
}
