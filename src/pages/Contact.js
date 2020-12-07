import React, { Component } from 'react';
import { Form, Container, Row } from 'react-bootstrap';
import StandardButton from '../shared/StandardButton';

export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSending: false,
            subject: 'Choose Subject',
            email: '',
            message: ''
        };
    }


    render() {
        return (
            <Container className='portfolio-block'>
                <Row className='mt-5 mb-3'>
                    <h2>
                        Contact Me
                    </h2>
                </Row>
                <Row>
                    <Form>
                        <Form.Group controlId='formBasicEmail'>
                            <Form.Label>Subject</Form.Label>
                            <Form.Control as="select">
                                <option>Just to say hi!</option>
                                <option>Business Inquiry / Freelance</option>
                                <option>Social Media (LinkedIn, Twitter, etc)</option>
                                <option>Software / Github</option>
                                <option>Other / General</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='formBasicPassword'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type='email' placeholder='username@gmail.com' htmlSize={200} />
                            <Form.Text className='text-muted'>
                                I'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId='formBasicCheckbox'>
                            <Form.Label>Message (Max. 300 words)</Form.Label>
                            <Form.Control as='textarea' rows={3} htmlSize={200} />
                        </Form.Group>
                        <Form.Group>
                            <StandardButton
                                className='mr-3'
                                text='✉ Send Email'
                                isLink={false}
                                size='lg'
                                action={() => console.log('Submitting...')}
                            />
                            <StandardButton
                                text='Clear Form'
                                isLink={false}
                                size='lg'
                                action={() => console.log('Clearing...')}
                            />
                        </Form.Group>
                    </Form>
                </Row>
            </Container>
        )
    }
}
