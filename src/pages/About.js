import React, { Component } from 'react'
import ProfileIntro from '../components/ProfileIntro';
import SkillSet from '../components/SkillSet';
import Carousel from '../components/Carousel';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import BadgeService from '../services/BadgeService';
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/RingLoader";
import { Container } from 'react-bootstrap';

const fadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1s ${fadeInAnimation};
`;

const spinnercss = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top: 5%;
`;
export default class About extends Component {

    constructor(props) {
        super(props)

        this.state = {
            badges: [],
            isLoading: true
        }
    }

    componentDidMount = async () => {
        const badges = await BadgeService.findAllBadges();
        this.setState({ badges, isLoading: false });
    }

    render() {
        const { badges } = this.state;
        return (
            <Container className='portfolio-block .block-intro'>
                {this.state.isLoading ?
                    <PuffLoader
                        css={spinnercss}
                        size={100}
                        color={"#f45b69"}
                        loading={this.state.loading}
                    /> :
                    <FadeInDiv>
                        <ProfileIntro />
                        <SkillSet />
                        <Carousel items={badges} />
                    </FadeInDiv>
                }
            </Container>
        )
    }
}
