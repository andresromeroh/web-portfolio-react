import React, { Component } from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import ProjectCard from '../shared/ProjectCard';
import RepositoryService from '../services/RepositoryService';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { FadeInDiv, Spinnercss } from '../shared/CustomStyled';

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>,
    );
}

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
            const jsx = repositories.map((repo, index) => {
                if (index < 6) {
                    return <Col md='6' lg='4' key={index}>
                        <ProjectCard
                            title={this.formatTitle(repo.name)}
                            // description={repo.description}
                            language={repo.language}
                            url={repo.htmlUrl}
                        />
                    </Col>
                }
                return null;
            });
            return jsx;
        }
    }

    formatTitle = (title) => {
        const formatedTitle = title.replaceAll('-', ' ').toUpperCase();
        if (formatedTitle.length > 15) {
            const splitted = formatedTitle.slice(0, 20);
            return splitted;
        }
        return formatedTitle;
    }

    render() {
        return (
            <React.Fragment>
                {this.state.isLoading ?
                    <Container className='pacman-spinner'>
                        <PacmanLoader
                            css={Spinnercss}
                            size={20}
                            color={'#ffbf69'}
                            loading={this.state.loading}
                        />
                    </Container>
                    :
                    <Container className='projects-block'>
                        <FadeInDiv>
                            <Row className='pt-5 pl-5'>
                                <h2>
                                    Coding Projects
                            </h2>
                            </Row>
                            <Row className='p-5'>
                                {this.getRepositories()}
                                <Row className='ml-3 mt-2'>
                                    <h6>Projects: 1 to 9</h6>
                                </Row>
                                <Row className='ml-auto mr-3 mt-1'>
                                    <Pagination>{items}</Pagination>
                                </Row>
                            </Row>
                        </FadeInDiv>
                    </Container>
                }
            </React.Fragment>
        )
    }
}
