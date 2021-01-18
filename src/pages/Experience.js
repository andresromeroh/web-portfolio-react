import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

export default class Experience extends Component {
    render() {
        return (
            <div className='page cv-page my-1'>
                <div className='portfolio-block cv align-content-center'>
                    <Container>
                        <div className='work-experience group'>
                            <div className='heading py-5'>
                                <h2 className='text-center'>Work Experience</h2>
                            </div>
                            <div className='item py-3'>
                                <Row>
                                    <Col md='6'>
                                        <h3>Software Developer</h3>
                                        <h4 className='organization'>First Factory</h4>
                                    </Col>
                                    <div className='ml-auto mr-5 pr-5 mt-3'><small><span className='period'>02/2020 - Present</span></small></div>
                                </Row>
                                <p className='text-muted'>As a Software Developer at First Factory I am in charge of maintaining and developing software solutions for new and existing clients.</p>
                                <small className='text-muted'>
                                    <ul>
                                        <li>Develop new product features using JavaScript and NodeJS.</li>
                                        <li>Deliver efficient code that meets business needs and client requirements.</li>
                                        <li>Participate in Agile Scrum calls and meetings to evaluate and size upcoming features.</li>
                                        <li>Collaborate with other developers and stake holders to create high quality solutions.</li>
                                    </ul>
                                </small>
                            </div>
                            <div className='item py-3'>
                                <Row>
                                    <Col md='6'>
                                        <h3>Jr. Application Developer</h3>
                                        <h4 className='organization'>IBM</h4>
                                    </Col>
                                    <div className='ml-auto mr-5 pr-5 mt-3'><small><span className='period'>08/2019 - 02/2020</span></small></div>
                                </Row>
                                <p className='text-muted'>Collaborate with product teams and cross divisional teams to automate legacy procedures developing new web applications using open source technologies and internal IBM Dedicated Cloud services (CIO).</p>
                                <small className='text-muted'>
                                    <ul>
                                        <li>Develop RESTful services using NodeJS, Express, JWT, and IBM Cloudant.</li>
                                        <li>Develop UI components with React including state management with Redux.</li>
                                        <li>Configuration of Cloudant instances, development of new views and queries.</li>
                                        <li>Configuration and integration of IBM Cloud Foundry for application deployments.</li>
                                        <li>Configuration of CI/CD tools like Git and IBM Pipelines for application staging.</li>
                                    </ul>
                                </small>
                            </div>
                        </div>
                        <div className='education group'>
                            <div className='heading py-5'>
                                <h2 className='text-center'>Professional Education</h2>
                            </div>
                            <div className='item py-3'>
                                <Row>
                                    <Col md='6'>
                                        <h3>Bachelor's Degree in Software Engineering</h3>
                                        <h4 className='organization'>Universidad Nacional de Costa Rica</h4>
                                    </Col>
                                    <div className='ml-auto mr-5 pr-5 mt-3'><small><span className='period'>06/2019 - 06/2020</span></small></div>
                                </Row>
                                <p className='text-muted'>Graduated on 2020 in Heredia, Costa Rica.</p>
                            </div>
                            <div className='item py-3'>
                                <Row>
                                    <Col md='6'>
                                        <h3>Associate's Degree in Software Engineering</h3>
                                        <h4 className='organization'>Universidad Nacional de Costa Rica<br />
                                        </h4>
                                    </Col>
                                    <div className='ml-auto mr-5 pr-5 mt-3'><small><span className='period'>06/2015 - 06/2019</span></small></div>
                                </Row>
                                <p className='text-muted'>Graduated on 2019 in Heredia, Costa Rica.</p>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className='fab'>
                    <a href='https://www.dropbox.com/s/bfe85epvqi99a8j/ANDRES_ROMERO_CV.pdf?dl=0' target='_blank' rel='noreferrer' style={{ color: 'inherit', textDecoration: 'none' }}>
                        <i className={`icon ion-document-text`} />
                    </a>
                </div>
            </div >
        )
    }
}
