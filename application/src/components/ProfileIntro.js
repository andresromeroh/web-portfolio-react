
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StandardButton from '../shared/StandardButton';
import Avatar from '../assets/images/avatar.jpg';

export default class ProfileIntro extends Component {
    render() {
        return (
            <section className="portfolio-block block-intro" style={{ paddingBottom: "15px" }}>
                <Container>
                    <Row>
                        <Col sm="12" md="6" lg="6" xl="6">
                            <img className="avatar" src={Avatar} alt="Avatar" />
                        </Col>
                        <Col sm="12" md="6" lg="6" xl="6">
                            <Row>
                                <Col>
                                    <p className="intro-script">
                                        Hello! I am <strong>Andrés</strong>. I am a Full-Stack Software Engineer. I have passion for high-quality, minimal and easy to use software products.
                                    </p>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: "40px" }}>
                                <Col>
                                    <StandardButton
                                        text="Check my Projects"
                                        size="lg"
                                    />
                                </Col>
                                <Col>
                                    <StandardButton
                                        text="Send me an Email"
                                        size="lg"
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}
