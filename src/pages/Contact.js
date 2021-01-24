import React, { Component } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import { EMAIL_SUCCESS } from '../global/Notifications';
import EmailService from '../services/EmailService';
import SubmitButton from '../shared/SubmitButton';
import swal from 'sweetalert2';
import hold from 'holddotjs';

export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSending: false,
            from: '',
            subject: 'Business Inquiry',
            text: ''
        };
    }

    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    showSuccessNotification = async () => {
        swal.fire(EMAIL_SUCCESS);
        await hold.seconds(2);
        this.clearForm();
        swal.close();
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { from, subject, text } = this.state;
        const [response] = await EmailService.sendEmail(from, subject, text);
        if (response.statusCode === 200 || response.statusCode === 202) {
            this.showSuccessNotification();
        } else {
            console.log(JSON.stringify(response, null, 4));
        }
    }

    clearForm = () => this.setState({ from: '', text: '' });

    render() {
        const { subject, from, text } = this.state;
        return (
            <Container className='portfolio-block'>
                <Row>
                    <Col md={{ span: 12, offset: 2 }}>
                        <Row className='mt-5 mb-3'>
                            <h2>Contact Me</h2>
                        </Row>
                        <Row>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control
                                        as='select'
                                        name='subject'
                                        value={subject}
                                        onChange={this.onInputChange}
                                        className='browser-default custom-select'>
                                        <option>Business Inquiry</option>
                                        <option>Freelance Project</option>
                                        <option>Just to say hi!</option>
                                        <option>Software Question</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>E-mail Address</Form.Label>
                                    <Form.Control
                                        name='from'
                                        type='email'
                                        placeholder='someusername@gmail.com'
                                        htmlSize={75}
                                        value={from}
                                        onChange={this.onInputChange}
                                        required
                                        autoComplete='off'
                                    />
                                    <Form.Text className='text-muted'>
                                        I'll never share your e-mail with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Message (Max. 300 words)</Form.Label>
                                    <Form.Control
                                        as='textarea'
                                        name='text'
                                        rows={3}
                                        htmlSize={75}
                                        value={text}
                                        onChange={this.onInputChange}
                                        required
                                        autoComplete='off'
                                        maxLength={300}
                                    />
                                </Form.Group>
                                <Col className='mt-5' md={{ span: 8, offset: 2 }}>
                                    <SubmitButton text='Send E-mail' size='lg'/>
                                </Col>
                            </Form>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}
