import React from 'react';
import styled from 'styled-components';
import {
  TiDocumentText,
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
} from 'react-icons/ti';

import colours from '../styles/colours';

const LinksContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: start;
  height: 100px;
  width: 400px;
  color: ${colours.primary};
`;

const linkStyle = `
  transition: transform 0.2s;
  color: inherit;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const GithubIcon = styled(TiSocialGithubCircular)`
  ${linkStyle}
`;

const LinkedInIcon = styled(TiSocialLinkedinCircular)`
  ${linkStyle}
`;

const CvIcon = styled(TiDocumentText)`
  ${linkStyle}
`;

export default function LinksBar() {
  return (
    <LinksContainer>
      <a
        href={'https://github.com/isaac-scarrott'}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon size={40} />
      </a>
      <a
        href={'https://www.linkedin.com/in/isaac-scarrott'}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon size={40} />
      </a>
      <a
        href={'http://isaacscarrott.co.uk/Isaac%20Scarrott%20CV.pdf'}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CvIcon size={40} />
      </a>
    </LinksContainer>
  );
}
