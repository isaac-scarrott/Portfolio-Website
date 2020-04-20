import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import PageContainer from '../styles/PageContainer';
import BlogPostTile from './BlogPostTile';
import device from '../styles/mediaQueryStuff';

const animation = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const BlogPageContainer = styled(PageContainer)`
  flex-direction: column;
  align-items: center;
  animation: ${animation} 0.3s forwards;

  h1 {
    height: 5%;
    display: flex;
    color: ${props => props.theme.colours.text};
    margin-bottom: 0;
    text-shadow: 0px 15px 20px rgba(89, 127, 124, 0.6);
  }
`;

export const BlogEntriesContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  flex-grow: 1;
  width: 80%;
  @media ${device.mobile} {
    grid-template-columns: 100%;
    grid-template-rows: auto;
    left: 5%;
  }
`;

const comingSoonData = {
  node: {
    timeToRead: '',
    frontmatter: {
      title: 'Coming Soon',
      path: '/coming-soon',
      featuredImage: {
        childImageSharp: {
          fluid:
            'https://www.seedprod.com/wp-content/uploads/2019/09/Best-coming-soon-pages.jpg',
        },
      },
      createdTime: '',
    },
  },
};

function getBlogPostsWithComingSoonFillers(blogPosts) {
  let comingSoonBlogPosts = [];

  if (blogPosts?.length < 4) {
    comingSoonBlogPosts = Array(4 - blogPosts.length).fill(comingSoonData);
  }

  return [...blogPosts, ...comingSoonBlogPosts];
}

export default function BlogPage() {
  const data = useStaticQuery(graphql`
    query getAllBlogPostInfo {
      allMarkdownRemark(
        sort: { fields: [frontmatter___createdTime], order: DESC }
      ) {
        edges {
          node {
            timeToRead
            frontmatter {
              title
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              createdTime
              path
            }
          }
        }
      }
    }
  `);

  const blogPostWithComingSoon = getBlogPostsWithComingSoonFillers(
    data.allMarkdownRemark.edges
  );

  return (
    <BlogPageContainer>
      <h1>Blog</h1>
      <BlogEntriesContainer>
        {blogPostWithComingSoon.map(({ node }, index) => {
          return (
            <BlogPostTile
              path={node.frontmatter.path}
              image={node.frontmatter.featuredImage.childImageSharp.fluid}
              title={node.frontmatter.title}
              timeToRead={node.timeToRead}
              date={node.frontmatter.createdTime}
            />
          );
        })}
      </BlogEntriesContainer>
    </BlogPageContainer>
  );
}
