import React, { Component } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import PrimaryButton from '../shared/PrimaryButton';
import EmailService from '../services/EmailService';
import swal from 'sweetalert2';

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

    onEmailSend = async () => {
        const { from, subject, text } = this.state;
        const [response] = await EmailService.sendEmail(from, subject, text);

        if (response.statusCode === 200 || response.statusCode === 202) {
            swal.fire({
                title: 'Success!',
                text: 'Your email has been sent.',
                icon: 'success',
                buttons: false,
                iconColor: '#ef233c',
                showConfirmButton: false,
                position: 'center'
            })
            setTimeout(() => {
                swal.close();
                this.setState({ from: '', text: '' });
            }, 3000);
        } else {
            console.log(JSON.stringify(response, null, 4));
        }
    }

    isValid = () => this.state.from.length > 0 && this.state.text.length > 0;

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
                            <Form>
                                <Form.Group controlId='formBasicfrom'>
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control
                                        as='select'
                                        name='subject'
                                        className='browser-default custom-select'
                                        value={subject}
                                        onChange={this.onInputChange}
                                        required>
                                        <option>Business Inquiry</option>
                                        <option>Freelance Project</option>
                                        <option>Just to say hi!</option>
                                        <option>Software Question</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId='formBasicPassword'>
                                    <Form.Label>E-mail Address</Form.Label>
                                    <Form.Control
                                        type='from'
                                        name='from'
                                        placeholder='username@gmail.com'
                                        htmlSize={75}
                                        value={from}
                                        onChange={this.onInputChange}
                                        required
                                        autocomplete='off'
                                    />
                                    <Form.Text className='text-muted'>
                                        I'll never share your from with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId='formBasicCheckbox'>
                                    <Form.Label>Message (Max. 300 words)</Form.Label>
                                    <Form.Control
                                        as='textarea'
                                        name='text'
                                        rows={3}
                                        htmlSize={75}
                                        value={text}
                                        onChange={this.onInputChange}
                                        required
                                        autocomplete='off'
                                    />
                                </Form.Group>
                                <Col className='mt-5' md={{ span: 8, offset: 2 }}>
                                    <Form.Group>
                                        <PrimaryButton
                                            text='Send E-mail'
                                            size='lg'
                                            action={this.onEmailSend}
                                            disabled={!this.isValid()}
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
