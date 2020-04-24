import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaReact, FaAws, FaGitAlt } from 'react-icons/fa';
import { DiNodejs, DiPhp } from 'react-icons/di';
import { navigate } from 'gatsby';
import device from '../styles/mediaQueryStuff';

import PageContainer from '../styles/PageContainer';

export const transitionLengthString = '0.5s';

const animation = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const animationIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const SkillsTitleContainer = styled.h1`
  text-shadow: 0px 15px 20px rgba(89, 127, 124, 0.6);
  height: 10%;
  position: absolute;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colours.text};
  animation: ${props => (props.open ? animation : animationIn)}
    ${transitionLengthString} forwards;
`;

export const SkillsContainer = styled.div`
  display: flex;
  padding: 1% 0;
  align-items: center;
  background-color: ${props => props.theme.colours.primary};
  color: ${props => props.theme.colours.white};
  width: 100%;
  height: ${props => (props.open ? '100vh' : '10%')};
  justify-content: space-evenly;
  margin: auto 0;
  transition: ${transitionLengthString} ease;

  @media ${device.mobile} {
    height: 80%;
    flex-direction: column;
    background-color: transparent;
    color: ${props => props.theme.colours.primary};
    button svg {
      fill: ${props => props.theme.colours.primary}!important;
    }
  }

  button {
    animation: ${props => (props.open ? animation : animationIn)}
      ${transitionLengthString} forwards;
    transition: transform 0.2s;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);

      & > svg {
        filter: drop-shadow(4px 4px 3px rgba(0, 0, 0, 0.7));
      }
    }

    svg {
      fill: white;
      transition: filter 0.15s;
      filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
    }
  }
`;

const skillsComponents = [
  { linkTo: '/skills/nodejs', component: DiNodejs },
  { linkTo: '/skills/reactjs', component: FaReact },
  { linkTo: '/skills/aws', component: FaAws },
  { linkTo: '/skills/git', component: FaGitAlt },
  { linkTo: '/skills/php', component: DiPhp },
];

export default function SkillsPage() {
  const [skillOpen, setSkillsOpen] = useState(false);
  const pageContainerRef = useRef(null);

  function delayedLinkToPage(linkTo) {
    window.scrollTo({
      top: pageContainerRef.current.offsetTop,
      behavior: 'smooth',
    });
    setTimeout(() => navigate(linkTo), 550);
  }

  return (
    <PageContainer ref={pageContainerRef}>
      <SkillsTitleContainer open={skillOpen}>Skills</SkillsTitleContainer>
      <SkillsContainer open={skillOpen}>
        {skillsComponents.map(({ component, linkTo }, index) => (
          <button
            key={String(index)}
            open={skillOpen}
            onClick={() => delayedLinkToPage(linkTo)}
          >
            {React.createElement(component, {
              size: 100,
              onClick: () => setSkillsOpen(true),
            })}
          </button>
        ))}
      </SkillsContainer>
    </PageContainer>
  );
}
