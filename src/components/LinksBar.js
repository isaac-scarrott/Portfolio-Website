import React from 'react';
import styled from 'styled-components';
import {
  TiDocumentText,
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
} from 'react-icons/ti';

import cv from '../cv.pdf'
import device from '../styles/mediaQueryStuff';

export const LinksContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: start;
  height: 100px;
  width: 400px;
  color: ${props => props.theme.colours.primary};

  @media ${device.mobile} {
    width: 40%;
    left: 5%;
  }
  a {
    transition: transform 0.2s;
    text-decoration: none;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;

export default function LinksBar() {
  return (
    <LinksContainer>
      <a
        href={'https://github.com/isaac-scarrott'}
        target="_blank"
        rel="noopener noreferrer"
      >
        <TiSocialGithubCircular size={40} />
      </a>
      <a
        href={'https://www.linkedin.com/in/isaac-scarrott'}
        target="_blank"
        rel="noopener noreferrer"
      >
        <TiSocialLinkedinCircular size={40} />
      </a>
        <a href={cv} target="_blank" rel="noopener noreferrer">
          <TiDocumentText size={40} />
        </a>
    </LinksContainer>
  );
}
