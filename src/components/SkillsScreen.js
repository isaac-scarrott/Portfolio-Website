import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaReact, FaAws, FaGitAlt } from 'react-icons/fa';
import { DiNodejs, DiPhp } from 'react-icons/di';
import { navigate } from 'gatsby';

import PageContainer from '../styles/PageContainer';
import colours from '../styles/colours';

const sleep = m => new Promise(r => setTimeout(r, m));

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
  animation: ${props => (props.open ? animation : animationIn)} 0.5s forwards;
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
  transition: 0.5s linear;
`;

const SkillsItemContainer = styled.span`
  animation: ${props => (props.open ? animation : animationIn)} 0.5s forwards;
  transition: transform 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
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
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);

  function delayedLinkToPage(linkTo) {
    setTimeout(() => navigate(linkTo), 550);
  }

  return (
    <PageContainer>
      <SkillsTitleContainer open={isSkillsOpen}>Skills</SkillsTitleContainer>
      <SkillsContainer open={isSkillsOpen}>
        {skillsComponents.map(({component, linkTo}, index) => (
          <SkillsItemContainer key={String(index)} open={isSkillsOpen}>
            <a onClick={() => delayedLinkToPage(linkTo)}>
              {React.createElement(component, {
                size: 100,
                onClick: () => setIsSkillsOpen(true),
              })}
            </a>
          </SkillsItemContainer>
        ))}
      </SkillsContainer>
    </PageContainer>
  );
}
