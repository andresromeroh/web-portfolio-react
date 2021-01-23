import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import StandardButton from '../shared/StandardButton';
import Avatar from '../assets/images/development.png';
import styled from 'styled-components';
import { FadeInDowDiv } from '../shared/CustomStyled';

const MarginRow = styled(Row)`
    margin: 40px;
    position: relative;
    @media only screen and (min-width: 768px) {
        transform: translate(-5%, 0%);
    }
`
const INTRO =
    <p className='intro-script'>
        Hello there! I am <strong style={{ color: '#ef233c' }}>Andrés</strong>, I'm a Software Developer with passion for building high-quality, minimal and easy to use software solutions and applications.
    </p>

export default class ProfileIntro extends Component {
    render() {
        return (
            <section className='profile-intro'>
                <Row className='pb-1'>
                    <Col sm='12' md='6' lg='6' xl='6'>
                        <FadeInDowDiv>
                            <Row>
                                <Col>
                                    {INTRO}
                                </Col>
                            </Row>
                            <MarginRow className='align-items-center text-center'>
                                <Col>
                                    <StandardButton
                                        text='CHECK MY PROJECTS'
                                        size='lg'
                                        action='/projects'
                                        isLink={true}
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
