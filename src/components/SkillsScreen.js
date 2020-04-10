import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaReact, FaAws, FaGitAlt } from 'react-icons/fa';
import { DiNodejs, DiPhp } from 'react-icons/di';
import { navigate } from 'gatsby';

import PageContainer from '../styles/PageContainer';
import colours from '../styles/colours';

export const transitionLengthString = '0.5s'

const animation = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const animationIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const SkillsTitleContainer = styled.h1`
  height: 10%;
  position: absolute;
  display: flex;
  align-items: center;
  color: #597f7c;
  animation: ${props => (props.open ? animation : animationIn)} ${transitionLengthString} forwards;
`;

export const SkillsContainer = styled.div`
  display: flex;
  padding: 1% 0;
  align-items: center;
  background-color: ${colours.primary};
  color: ${colours.secondary};
  width: 100%;
  height: ${props => (props.open ? '100vh' : '10%')};
  justify-content: space-evenly;
  margin: auto 0;
  transition: ${transitionLengthString} ease;

  a {
    animation: ${props => (props.open ? animation : animationIn)} ${transitionLengthString} forwards;
    transition: transform 0.2s;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;

const skillsComponents = [
  {linkTo: '/nodejs', component: DiNodejs},
  {linkTo: '/reactjs', component: FaReact},
  {linkTo: '/aws', component: FaAws},
  {linkTo: '/git', component: FaGitAlt},
  {linkTo: '/php', component: DiPhp}
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
          <a
            key={String(index)}
            open={skillOpen}
            onClick={() => delayedLinkToPage(linkTo)}
          >
            {React.createElement(component, {
              size: 100,
              onClick: () => setSkillsOpen(true),
            })}
          </a>
        ))}
      </SkillsContainer>
    </PageContainer>
  );
}
