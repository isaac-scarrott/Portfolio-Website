import React from 'react';
import styled from 'styled-components';
import {
  TiDocumentText,
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
} from 'react-icons/ti';

import colours from '../styles/colours';

import cv from '../cv.pdf'

const LinksContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: start;
  height: 100px;
  width: 400px;
  color: ${colours.primary};

  a {
    transition: transform 0.2s;
    color: inherit;
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
