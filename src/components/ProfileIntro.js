import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import StandardButton from '../shared/StandardButton';
import Avatar from '../assets/images/development.png';
import styled from 'styled-components';
import { FadeInDowDiv } from '../shared/CustomStyled';

const MarginRow = styled(Row)`
    margin-top: 40px
`
const INTRO =
    <p className='intro-script'>
        Hello there! I am <strong style={{ color: '#ffbf69' }}>Andrés</strong>, I'm a Software Developer
        with passion for building high-quality, minimal and easy to use software solutions.
    </p>

export default class ProfileIntro extends Component {
    render() {
        return (
            <section className='profile-intro'>
                <Row className='pb-2'>
                    <Col sm='12' md='6' lg='6' xl='6'>
                        <FadeInDowDiv>
                            <Row>
                                <Col>
                                    {INTRO}
                                </Col>
                            </Row>
                            <MarginRow>
                                <Col>
                                    <StandardButton
                                        text='Check my Projects'
                                        size='lg'
                                        isLink
                                        action='/projects'
                                    />
                                </Col>
                                <Col>
                                    <StandardButton
                                        text='Send me an Email'
                                        size='lg'
                                        isLink
                                        action='/contact'
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
