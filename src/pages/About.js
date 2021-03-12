import React, { Component } from 'react'
import ProfileIntro from '../components/ProfileIntro';
import SkillSet from '../components/SkillSet';
import Carousel from '../components/Carousel';
import BadgeService from '../services/BadgeService';
import { Container } from 'react-bootstrap';
import AppSpinner from '../shared/AppSpinner';
import { FadeInDiv } from '../shared/CustomStyled';

export default class About extends Component {

    constructor(props) {
        super(props);
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
        const { badges, isLoading } = this.state;
        return (
            <React.Fragment>
                {
                    isLoading ?
                        <AppSpinner /> :
                        <Container className='portfolio-block'>
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
