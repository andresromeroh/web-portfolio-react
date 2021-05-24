import React, { useState, useEffect } from 'react'

import Intro from '../components/Intro';
import SkillSet from '../components/SkillSet';
import Carousel from '../components/Carousel';

import AppSpinner from '../shared/AppSpinner';
import { FadeInDiv } from '../shared/CustomStyled';
import { Container } from 'react-bootstrap';

import BadgeService from '../services/BadgeService';

const About = () => {

    const [badges, setBadges] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBadges = async () => {
            const badges = await BadgeService.findAllBadges();
            setBadges(badges);
            setLoading(false);
        }

        fetchBadges();
    }, []);

    return (
        <>
            {
                loading ? <AppSpinner /> :
                    <Container className='portfolio-block'>
                        <FadeInDiv>
                            <Intro />
                            <SkillSet />
                            <Carousel items={badges} />
                        </FadeInDiv>
                    </Container>
            }
        </>
    )
}

export default About;