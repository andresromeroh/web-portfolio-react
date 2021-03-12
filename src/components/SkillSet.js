import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import SkillCard from '../shared/SkillCard';
import { Strong } from '../shared/CustomStyled';
import { BACKEND_DESCRIPTION, FRONTEND_DESCRIPTION, CLOUD_DESCRIPTION,
    BACKEND_ICON, FRONTEND_ICON, CLOUD_ICON } from '../global/Constants';

export default class SkillSet extends Component {
    render() {
        return (
            <section className='skill-set'>
                <Row className='pb-5'>
                    <h2>
                        <Strong>S</Strong>oftware Development Skills
                    </h2>
                </Row>
                <Row>
                    <Col sm='12' md='4' lg='4' xl='4'>
                        <SkillCard
                            icon={BACKEND_ICON}
                            header='Backend Development'
                            text={BACKEND_DESCRIPTION}
                        />
                    </Col>
                    <Col sm='12' md='4' lg='4' xl='4'>
                        <SkillCard
                            icon={FRONTEND_ICON}
                            header='Frontend Development'
                            text={FRONTEND_DESCRIPTION}
                        />
                    </Col>
                    <Col sm='12' md='4' lg='4' xl='4'>
                        <SkillCard
                            icon={CLOUD_ICON}
                            header='Cloud Services'
                            text={CLOUD_DESCRIPTION}
                        />
                    </Col>
                </Row>
            </section>
        )
    }
}
