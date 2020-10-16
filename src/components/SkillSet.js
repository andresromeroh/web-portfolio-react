import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SkillCard from '../shared/SkillCard';
import { BACKEND_ICON, FRONTEND_ICON, CLOUD_ICON } from '../global/Icons';

export default class SkillSet extends Component {
    render() {
        return (
            <section className='skill-set'>
                <Container>
                    <Row>
                        <div className='heading' style={{ paddingBottom: '30px' }}>
                            <h2>Software Development Skills</h2>
                        </div>
                    </Row>
                    <Row>
                        <Col sm='12' md='4' lg='4' xl='4'>
                            <SkillCard
                                icon={BACKEND_ICON}
                                header='Backend Development'
                                text='I have experience with backend development, I work with NodeJS and Java to implement RESTful services, business logic, security and middleware layers.'
                            />
                        </Col>
                        <Col sm='12' md='4' lg='4' xl='4'>
                            <SkillCard
                                icon={FRONTEND_ICON}
                                header='Frontend Development'
                                text='Either you need someone able to work with the latest frontend libraries like React and Redux, or someone to work with plain Javascript, HTML &amp; CSS I got you covered.'
                            />
                        </Col>
                        <Col sm='12' md='4' lg='4' xl='4'>
                            <SkillCard
                                icon={CLOUD_ICON}
                                header='Cloud Services'
                                text={'Want to implement cloud native applications? I\'ve worked with some of the most popular cloud services to build and deploy code and databases including IBM Cloud, Heroku, AWS and Mongo DB.'}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}
