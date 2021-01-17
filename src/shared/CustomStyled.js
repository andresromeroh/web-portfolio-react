import styled, { keyframes } from 'styled-components';
import { css } from "@emotion/core";
import { fadeIn, fadeInDown } from 'react-animations';

export const Strong = styled.strong`color: #2ec4b6`;
export const FadeInDiv = styled.div`animation: 3s ${keyframes`${fadeIn}`};`;
export const FadeInDowDiv = styled.div`animation: 3s ${keyframes`${fadeInDown}`};`;

export const Spinnercss = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top: 10%;
  margin-bottom: 5%;
`;