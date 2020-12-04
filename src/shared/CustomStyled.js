import styled, { keyframes } from 'styled-components';
import { css } from "@emotion/core";
import { fadeIn } from 'react-animations';

export const Strong = styled.strong`color: #f45b69`;
export const FadeInDiv = styled.div`animation: 1s ${keyframes`${fadeIn}`};`;

export const Spinnercss = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top: 10%;
  margin-bottom: 5%;
`;