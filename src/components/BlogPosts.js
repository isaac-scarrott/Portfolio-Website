import React from 'react';
import styled, {keyframes} from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import dayjs from 'dayjs';

import PageContainer from '../styles/PageContainer';

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
    color: #597f7c;
    margin-bottom: 0;
  }
`;

export const BlogTitleContainer = styled.h1`
  height: 5%;
  display: flex;
  color: #597f7c;
  margin-bottom: 0;
`;

export const BlogEntriesContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  flex-grow: 1;
  width: 80%;
`;

export const BlogEntryContainer = styled.div`
  margin: 5%;
  transition: transform 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 70%;
    height: 70%;
    border-radius: 2px;
    box-shadow: 0px 30px 48px -18px rgba(0,0,0,0.33);
  }

  h3 {
    display: flex;
    align-items: center;
    height: '20%';
    margin: 0 10px;
  }

  p {
    display: 'flex';
    align-items: center;
    height: '10%';
    margin: 0 10px;
    color: gray;
    font-size: 15px;
    font-weight: 600;
  }
`;

export const BlogEntryTimeToRead = styled.p`
  float: left;
`;

export const BlogEntryDate = styled.p`
  float: right;
`;

const comingSoonData = {
  node : {
    timeToRead: '',
    frontmatter : {
      title: 'Coming Soon',
      path: '/coming-soon',
      image: 'https://www.seedprod.com/wp-content/uploads/2019/09/Best-coming-soon-pages.jpg',
      createdTime: ''
    }
  }
};

function getBlogPostsWithComingSoonfillers(blogPosts) {
  let comingSoonBlogPosts = [];

  if (blogPosts?.length < 4) {
    comingSoonBlogPosts = Array(4 - blogPosts.length).fill(comingSoonData);
  }

  return [...blogPosts, ...comingSoonBlogPosts];
}

export default function BlogPage() {
  const data = useStaticQuery(graphql`
    query getAllBlogPostInfo {
      allMarkdownRemark {
        edges {
          node {
            timeToRead
            frontmatter {
              title
              image
              createdTime
              path
            }
          }
        }
      }
    }
  `);

  const blogPostWithComingSoon = getBlogPostsWithComingSoonfillers(data.allMarkdownRemark.edges);

  return (
    <BlogPageContainer>
      <h1>Blog</h1>
      <BlogEntriesContainer>
        {blogPostWithComingSoon.map(({ node }, index) => {
          const formattedDate = node.frontmatter.createdTime
            ? dayjs(node.frontmatter.createdTime).format('MMM YYYY')
            : '';
          const timeToReadString = node.timeToRead ? `${node.timeToRead} min read` : '';

          return (
            <Link to={node.frontmatter.path} key={node.frontmatter.path + index}>
              <BlogEntryContainer>
                <img src={node.frontmatter.image} alt={node.frontmatter.title + ' image'}/>
                <h3>{node.frontmatter.title}</h3>
                <BlogEntryTimeToRead>{timeToReadString}</BlogEntryTimeToRead>
                <BlogEntryDate>{formattedDate}</BlogEntryDate>
              </BlogEntryContainer>
            </Link>
          );
        })}
      </BlogEntriesContainer>
    </BlogPageContainer>
  );
}
