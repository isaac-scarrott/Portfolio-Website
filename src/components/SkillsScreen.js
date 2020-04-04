import React from 'react';
import styled from 'styled-components';
import { FaReact, FaAws, FaGitAlt } from 'react-icons/fa';
import { DiNodejs, DiPhp } from 'react-icons/di';

import PageContainer from '../styles/PageContainer';
import colours from '../styles/colours';

export const SkillsPageContainer = styled(PageContainer)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SkillsTitleContainer = styled.h1`
  height: 10%;
  position: absolute;
  display: flex;
  align-items: center;
  color: #597f7c;
`;

export const SkillsContainer = styled.div`
  display: flex;
  padding: 1% 0;
  align-items: center;
  background-color: ${colours.primary};
  color: ${colours.secondary};
  width: 100%;
  justify-content: space-evenly;
  margin: auto 0;
`;

export const SkillsItemContainer = styled.span`
  transition: transform 0.2s;
  &:hover {
    /* cursor: pointer; */
    transform: scale(1.1);
  }
`;

const skillsComponents = [DiNodejs, FaReact, FaAws, FaGitAlt, DiPhp];

export default function SkillsPage() {
  return (
    <PageContainer>
      <SkillsTitleContainer>Skills</SkillsTitleContainer>
      <SkillsContainer>
        {skillsComponents.map((component, index) => (
          <SkillsItemContainer key={String(index)}>
            {React.createElement(component, { size: 100 })}
          </SkillsItemContainer>
        ))}
      </SkillsContainer>
    </PageContainer>
  );
}