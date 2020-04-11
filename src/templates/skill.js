import React, {useEffect, useState} from 'react';
import { graphql } from 'gatsby';
import { SkillsContainer, transitionLengthString } from '../components/SkillsScreen';
import { LayoutWithPageContainer as Layout } from '../components/Layout';
import colours from '../styles/colours';
import styled, {keyframes, css} from 'styled-components';
import PageContainer from '../styles/PageContainer';
import {SkillsTitleContainer} from '../components/SkillsScreen'
import BlogPostTile from '../components/BlogPostTile';

const animation = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const animationIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const SkillContainer = styled(SkillsContainer)`
  flex-direction: column;
`;

export const SkillDescription = styled.div`
  animation: ${props => (props.open ? css`${animationIn} ${transitionLengthString}` : css`${animation} ${transitionLengthString}`)} forwards;
  padding: 0 10%;
`;

export const CloseButton = styled.button`
  width: 50px;
  height: 50px;
  position: fixed;
  left: 0;
  top: 0;
  margin: 10px;
  border-radius: 50%;
  animation: ${props => (props.open ? css`${animationIn} ${transitionLengthString}` : css`${animation} ${transitionLengthString}`)} forwards;
  cursor: pointer;
  &:before, &:after {
    position: absolute;
    content: ' ';
    top: 5px;
    left: 23px;
    height: 40px;
    width: 5px;
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

const RelatedBlogPosts = styled.div`
  animation: ${props => (props.open ? css`${animationIn} ${transitionLengthString}` : css`${animation} ${transitionLengthString}`)} forwards;

`;

export default function Skill({data}) {
  const [goingBackToPrevPage, setGoingBackToPrevPage] = useState(false);

  const relatedBlogPosts = data.allMarkdownRemark.nodes.filter((blogPosts) => {
    const tagsArray = blogPosts.frontmatter.tags.split(',');
    return tagsArray.includes(data.skills.name.toLowerCase());
  });

  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return (() => document.body.style.overflowY = 'auto');
  }, []);

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
        <SkillContainer open={!goingBackToPrevPage}>
          <SkillDescription open={!goingBackToPrevPage}>
            {data.skills.description}
          </SkillDescription>
          <BlogPostTile
            path={relatedBlogPosts[0].frontmatter.path}
            image={relatedBlogPosts[0].frontmatter.image}
            title={relatedBlogPosts[0].frontmatter.title}
            timeToRead={relatedBlogPosts[0].timeToRead}
            date={relatedBlogPosts[0].frontmatter.createdTime}
          />
        </SkillContainer>
      </PageContainer>
    </Layout>
  );
}

export const postQuery = graphql`
  query SkillByPathAndAllBlogPosts($path: String!) {
    skills(path: { eq: $path }) {
      name
      description
    }

    allMarkdownRemark {
      nodes {
        timeToRead
        frontmatter {
          title
          image
          createdTime
          path
          tags
        }
      }
    }
  }
`;
