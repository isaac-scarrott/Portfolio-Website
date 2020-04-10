import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import styled, {keyframes} from 'styled-components';

import Layout from '../components/Layout';
import dayjs from 'dayjs';
import colours from '../styles/colours';

const animation = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const Content = styled.div`
  animation: ${animation} 0.3s forwards;
`;

const BlogPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20%;
  align-items: center;
`;

const BlogPostTitle = styled.h1`
  width: 55%;
`;

const BlogInfo = styled.div`
  display: inline-flex;
  color: ${colours.darkGray};
  justify-content: space-between;
  font-size: 8px;
  width: 55%;
`;

const BlogPostDate = styled.h1`
  font-weight: 300;
`;

const BlogPostReadTime = styled.h1`
  font-weight: 300;
`;

const ImageContainer = styled.div`
  width: 100%;
`;
const BlogPostImage = styled.img`
  box-shadow: 0px 30px 48px -18px rgba(0, 0, 0, 0.33);
  margin: 50px 0;
  width: 100%;
`;

const BlogPostContent = styled.div`
  width: 70%;
  line-height: 1.7;
`;

const ScrollProgressDivContainer = styled.div`
  position: fixed;
  display: absolute;
  height: 500px;
  width: 2px;
  background-color: ${colours.lightGray};
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
`;

const ScrollProgressDiv = styled.div`
  height: ${(props) => props.percentScrolled}%;
  width: 2px;
  background-color: ${colours.black};

`;

export default function Blog({ data }) {
  const { markdownRemark: post } = data;
  const [percentScrolled, setPercentScrolled] = React.useState(0);

  function calclateAndSetPercentScrolled() {
    const htmlElement = document.documentElement;
    setPercentScrolled(
      (htmlElement.scrollTop / (htmlElement.scrollHeight - htmlElement.clientHeight)) * 100
    );
  }

  useEffect(() => {
    window.addEventListener('scroll', calclateAndSetPercentScrolled);
    return () => window.removeEventListener('scroll', calclateAndSetPercentScrolled);
  }, [])

  return (
    <Layout>
      <Content>
        <ScrollProgressDivContainer>
          <ScrollProgressDiv percentScrolled={percentScrolled} />
        </ScrollProgressDivContainer>
        <BlogPostContainer>
          <BlogPostTitle>{post.frontmatter.title}</BlogPostTitle>
          <BlogInfo>
            <BlogPostDate>
              {dayjs(post.frontmatter.createdTime).format('MMM D, YYYY')}
            </BlogPostDate>
            <BlogPostReadTime>{`${post.timeToRead} min read`}</BlogPostReadTime>
          </BlogInfo>
          <ImageContainer>
            <BlogPostImage src={post.frontmatter.image} />
          </ImageContainer>
          <BlogPostContent dangerouslySetInnerHTML={{ __html: post.html }} />
        </BlogPostContainer>
      </Content>
    </Layout>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        title
        image
        createdTime
      }
    }
  }
`;
