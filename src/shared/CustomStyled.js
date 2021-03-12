import styled, { keyframes } from 'styled-components';
import { css } from '@emotion/core';
import { fadeIn, fadeInDown } from 'react-animations';

export const Strong = styled.strong`color: #ef233c`;
export const FadeInDiv = styled.div`animation: 2s ${keyframes`${fadeIn}`};`;
export const FadeInDowDiv = styled.div`animation: 2s ${keyframes`${fadeInDown}`};`;

export const Spinnercss = css`
  margin: 0 auto;
  @media (min-width: 768px) {
    margin-top: 20%;
    margin-bottom: 15%;
  }
  @media (max-width: 768px) {
    margin-top: 28%;
    margin-bottom: 15%;
  }
  display: block;
  border-color: red;
`;