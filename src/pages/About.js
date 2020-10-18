import React, { Component } from 'react'
import ProfileIntro from '../components/ProfileIntro';
import SkillSet from '../components/SkillSet';
import Carousel from '../components/Carousel';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1s ${fadeInAnimation};
`;

export default class About extends Component {
    render() {
        return (
            <FadeInDiv>
                <ProfileIntro />
                <SkillSet />
                <Carousel />
            </FadeInDiv>
        )
    }
}
