import React, { Component } from 'react'
import ProfileIntro from '../components/ProfileIntro';
import SkillSet from '../components/SkillSet';
import Carousel from '../components/Carousel';
import BadgeService from '../services/BadgeService';
import PacmanLoader from "react-spinners/PacmanLoader";
import { Container } from 'react-bootstrap';
import { FadeInDiv, Spinnercss } from '../shared/CustomStyled';

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
                    <PacmanLoader
                        css={Spinnercss}
                        size={20}
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
