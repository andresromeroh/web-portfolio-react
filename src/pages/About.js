import React, { Component } from 'react'
import ProfileIntro from '../components/ProfileIntro';
import SkillSet from '../components/SkillSet';
import Carousel from '../shared/Carousel';

export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <ProfileIntro />
                <SkillSet />
                <Carousel />
            </React.Fragment>
        )
    }
}
