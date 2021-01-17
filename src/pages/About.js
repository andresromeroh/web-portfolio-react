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
            <React.Fragment>
                {
                    this.state.isLoading ?
                        <Container className='pacman-spinner'>
                            <PacmanLoader
                                css={Spinnercss}
                                size={20}
                                color={"#ffbf69"}
                                loading={this.state.loading}
                            />
                        </Container> :
                        <Container className='portfolio-block .block-intro'>
                            <FadeInDiv>
                                <ProfileIntro />
                                <SkillSet />
                                <Carousel items={badges} />
                            </FadeInDiv>
                        </Container>
                }
            </React.Fragment>
        )
    }
}
