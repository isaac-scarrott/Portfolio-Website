import React, {useEffect, useState} from 'react';
import { graphql } from 'gatsby';
import { SkillsContainer, transitionLengthString } from '../components/SkillsScreen';
import { LayoutWithPageContainer as Layout } from '../components/Layout';
import colours from '../styles/colours';
import styled, {keyframes, css} from 'styled-components';
import PageContainer from '../styles/PageContainer';
import {SkillsTitleContainer} from '../components/SkillsScreen'

const animation = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const animationIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const SkillContainer = styled.div`
  display: flex;
  padding: 1% 0;
  align-items: center;
  background-color: ${colours.primary};
  color: ${colours.secondary};
  width: 100%;
  height: 100vh;
  justify-content: space-evenly;
  margin: auto 0;
`;

export const SkillDescription = styled.div`
  animation: ${props => (props.open ? css`${animationIn} ${transitionLengthString}` : css`${animation} ${transitionLengthString}`)} forwards;
  padding: 0 10%;
`;

export const CloseButton = styled.div`
  width: 80px;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  margin: 10px;
  border-radius: 50%;
  background-color: ${colours.secondary};
  animation: ${props => (props.open ? css`${animationIn} ${transitionLengthString}` : css`${animation} ${transitionLengthString}`)} forwards;
  cursor: pointer;
  &:before, &:after {
    position: absolute;
    content: ' ';
    top: 16px;
    left: 37px;
    height: 50px;
    width: 7px;
    background-color: ${colours.offWhite};
    border-radius: 10px;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

const SkillTitleContainer = styled(SkillsTitleContainer)`
  color: ${colours.offWhite};
  animation: ${props => (props.open ? css`${animationIn} ${transitionLengthString}` : css`${animation} ${transitionLengthString}`)} forwards;
`;

export default function Skill({data}) {
  const [goingBackToPrevPage, setGoingBackToPrevPage] = useState(false);

  useEffect(() => {
    if (goingBackToPrevPage) {
      setTimeout(() => window.history.back(), 550);
    }
  }, [goingBackToPrevPage]);

  return (
    <Layout>
      <PageContainer>
        <CloseButton
          onClick={() => setGoingBackToPrevPage(true)}
          open={!goingBackToPrevPage}
        />
        <SkillTitleContainer open={!goingBackToPrevPage}>
          {data.skills.name}
        </SkillTitleContainer>
        <SkillsContainer open={!goingBackToPrevPage}>
          <SkillDescription open={!goingBackToPrevPage}>
            {data.skills.description}
          </SkillDescription>
        </SkillsContainer>
      </PageContainer>
    </Layout>
  );
}

export const postQuery = graphql`
  query SkillByPath($path: String!) {
    skills(path: { eq: $path }) {
      name
      description
    }
  }
`;
