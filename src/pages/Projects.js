import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../shared/ProjectCard';
import wait from 'waait';
import RepositoryService from '../services/Repository.service';
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`animation: 1s ${fadeInAnimation};`;
const StyledStrong = styled.strong`color: #028090`;
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
        await wait(1000); // little delay for the spinner...
        this.setState({ repositories, isLoading: false });
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
                    <StyledH2>
                        <StyledStrong>G</StyledStrong>itHub Projects
                    </StyledH2>
                    {this.state.isLoading ?
                        <PuffLoader
                            css={spinnercss}
                            size={100}
                            color={"#f45b69"}
                            loading={this.state.loading}
                        /> : // if else ...
                        <FadeInDiv>
                            <Row>
                                {this.getRepositories()}
                            </Row>
                        </FadeInDiv>}
                </Container>
            </React.Fragment >
        )
    }
}
