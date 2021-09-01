import React, { Component } from 'react';
import { Container, Row, Col, Pagination, Spinner } from 'react-bootstrap';
import ProjectCard from '../shared/ProjectCard';
import RepositoryService from '../services/RepositoryService';
import { FadeInDiv, Strong } from '../shared/CustomStyled';
import AppSpinner from '../shared/AppSpinner';

export default class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            repositories: [],
            currentPage: 1,
            totalPages: 0,
            isChangingPage: false,
            pageSize: 6,
            totalProjects: 0
        }
    }

    componentDidMount = async () => {
        const { currentPage, pageSize } = this.state;
        const paginationData =
            await RepositoryService.search('', currentPage, pageSize);
        this.setState(() => ({
            isLoading: false,
            repositories: paginationData.repositories,
            currentPage: paginationData.page,
            totalPages: paginationData.pages,
            totalProjects: paginationData.pages * pageSize
        }));
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
                            language={repo.language ? repo.language : 'Markdown'}
                            url={repo.htmlUrl}
                        />
                    </Col>
                }
                return null;
            });
            return jsx;
        }
    }

    getPagination = () => {
        const { totalPages, currentPage } = this.state;
        let items = [];
        for (let number = 1; number <= totalPages; number++) {
            items.push(
                <Pagination.Item
                    key={number}
                    active={number === currentPage}
                    onClick={this.onPageClick}
                >
                    {number}
                </Pagination.Item>,
            );
        }
        return items;
    }

    formatTitle = (title) => {
        const formatedTitle = title.replaceAll('-', ' ').toUpperCase();
        return formatedTitle.length > 15 ? formatedTitle.slice(0, 20) : formatedTitle;
    }

    onPageClick = async ({ target }) => {
        this.setState(() => ({ isChangingPage: true }));
        const { currentPage, pageSize } = this.state;
        if (target.innerText.includes(currentPage)) {
            this.setState(() => ({ isChangingPage: false }));
            return;
        }
        const paginationData =
            await RepositoryService.search('', target.innerText, pageSize);
        setTimeout(() => {
            this.setState(() => ({
                repositories: paginationData.repositories,
                totalProjects: paginationData.pages * pageSize,
                currentPage: paginationData.page,
                isChangingPage: false
            }));
            window.scroll(0, 0);
        }, 250)
    }

    render() {
        const { totalProjects, isChangingPage } = this.state;
        return (
            <React.Fragment>
                {this.state.isLoading ?
                    <AppSpinner />
                    :
                    <Container className='projects-block'>
                        <FadeInDiv>
                            <Row className='pt-5 pl-5'>
                                <Col md='11' lg='11'>
                                    <h2><Strong>GitHub</Strong> Projects</h2>
                                </Col>
                                {isChangingPage
                                    && 
                                    <Col md='1' lg='1'>
                                        <Spinner className='ml-auto mr-5 mt-1' animation='border' />
                                    </Col>
                                }
                            </Row>
                            <Row className='pt-5 px-5 pb-3'>
                                {this.getRepositories()}
                            </Row>
                            <Row className='pb-5 px-5'>
                                <Row className='ml-3 mt-2'>
                                    <h6><b>Total: {totalProjects}</b></h6>
                                </Row>
                                <Row className='ml-auto ml-5 mt-1'>
                                    <Pagination>{this.getPagination()}</Pagination>
                                </Row>
                            </Row>
                        </FadeInDiv>
                    </Container>
                }
            </React.Fragment>
        )
    }
}
