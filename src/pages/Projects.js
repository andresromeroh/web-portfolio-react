import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../shared/ProjectCard';
import RepositoryService from '../services/Repository.service';

export default class Projects extends Component {

    constructor(props) {
        super(props)

        this.state = {
            projects: []
        }
    }

    componentDidMount = async () => {
        const projects = await RepositoryService.findAllPublic();
        console.log(projects);
    }

    render() {
        return (
            <React.Fragment>
                <Container className="portfolio-block project-no-images">
                    <div className='heading' style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                        <h2>GitHub Projects</h2>
                    </div>
                    <Row>
                        <Col md='6' lg='4'>
                            <ProjectCard
                                title='Markov'
                                description='Lorem Ipsum'
                                language='Python'
                                url='google.com'
                            />
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
