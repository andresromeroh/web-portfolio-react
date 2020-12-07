import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../shared/ProjectCard';
import RepositoryService from '../services/RepositoryService';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { FadeInDiv, Spinnercss } from '../shared/CustomStyled';

export default class Projects extends Component {

    constructor(props) {
        super(props)

        this.state = {
            repositories: [],
            isLoading: true
        }
    }

    componentDidMount = async () => {
        const repositories = await RepositoryService.findAllPublic();
        this.setState(() => ({ repositories, isLoading: false }));
    }

    getRepositories = () => {
        const { repositories } = this.state;
        if (!repositories.length) {
            return [];
        } else {
            const jsx = repositories.map((repo, index) =>
                <Col md='6' lg='4' key={index}>
                    <ProjectCard
                        title={repo.name.replaceAll('-', ' ').toUpperCase()}
                        description={repo.description}
                        language={repo.language}
                        url={repo.htmlUrl}
                    />
                </Col>
            );
            return jsx;
        }
    }

    render() {
        return (
            <Container className='mt-5 project-no-images'>
                {this.state.isLoading ?
                    <PacmanLoader
                        css={Spinnercss}
                        size={20}
                        color={'#f45b69'}
                        loading={this.state.loading}
                    /> :
                    <FadeInDiv>
                        <Row className='p-5'>
                            {this.getRepositories()}
                        </Row>
                    </FadeInDiv>
                }
            </Container>
        )
    }
}
