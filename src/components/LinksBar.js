import React from 'react';
import styled from 'styled-components';
import {
  TiDocumentText,
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
} from 'react-icons/ti';

import cv from '../cv.pdf';

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: ${props => props.theme.colours.secondary};

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
