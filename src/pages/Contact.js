import React, { Component } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import PrimaryButton from '../shared/PrimaryButton';

export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSending: false,
            subject: '',
            email: '',
            message: ''
        };
    }

    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { subject, email, message } = this.state;
        return (
            <Container className='portfolio-block'>
                <Row>
                    <Col md={{ span: 12, offset: 2 }}>
                        <Row className='mt-5 mb-3'>
                            <h2>Contact Me</h2>
                        </Row>
                        <Row>
                            <Form>
                                <Form.Group controlId='formBasicEmail'>
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control 
                                        as='select' 
                                        name='subject'
                                        className='browser-default custom-select' 
                                        value={subject}
                                        onChange={this.onInputChange}>
                                            <option>Business Inquiry</option>
                                            <option>Freelance Project</option>
                                            <option>Just to say hello!</option>
                                            <option>Software Question</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId='formBasicPassword'>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control 
                                        type='email'
                                        name='email'
                                        placeholder='username@gmail.com' 
                                        htmlSize={75}
                                        value={email}
                                        onChange={this.onInputChange}
                                    />
                                    <Form.Text className='text-muted'>
                                        I'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId='formBasicCheckbox'>
                                    <Form.Label>Message (Max. 300 words)</Form.Label>
                                    <Form.Control 
                                        as='textarea'
                                        name='message'
                                        rows={3} 
                                        htmlSize={75}
                                        value={message}
                                        onChange={this.onInputChange}
                                    />
                                </Form.Group>
                                <Col className='mt-5' md={{ span: 8, offset: 2 }}>
                                    <Form.Group>
                                        <PrimaryButton
                                            text='Send message'
                                            size='lg'
                                            action={() => console.log('Submitting...')}
                                        />
                                    </Form.Group>
                                </Col>
                            </Form>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}
