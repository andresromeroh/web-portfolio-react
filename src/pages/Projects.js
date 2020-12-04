import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../shared/ProjectCard';
import RepositoryService from '../services/RepositoryService';
import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`animation: 1s ${fadeInAnimation};`;
const StyledStrong = styled.strong`color: #f45b69`;
const StyledH2 = styled.h2`padding: 30px 0 30px 0`;

const spinnercss = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top: 5%;
`;

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
            <React.Fragment>
                <Container className="portfolio-block project-no-images">
                    {this.state.isLoading ?
                        <PacmanLoader
                            css={spinnercss}
                            size={20}
                            color={"#f45b69"}
                            loading={this.state.loading}
                        /> :
                        <FadeInDiv>
                            <StyledH2>
                                <StyledStrong>G</StyledStrong>itHub Projects
                            </StyledH2>
                            <Row>
                                {this.getRepositories()}
                            </Row>
                        </FadeInDiv>
                    }
                </Container>
            </React.Fragment >
        )
    }
}
