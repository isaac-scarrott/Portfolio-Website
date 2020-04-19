import React, { useEffect, useLayoutEffect } from 'react';
import { graphql } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import dayjs from 'dayjs';
import device from '../styles/mediaQueryStuff';

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
  @media ${device.mobile} {
    padding: 0 5%;
  }
  margin-top: 65px;
`;

const BlogPostTitle = styled.h1`
  width: 55%;
  @media ${device.mobile} {
    width: 100%;
  }
`;

const BlogInfo = styled.div`
  display: inline-flex;
  color: ${props => props.theme.colours.darkGray};
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
const BlogPostImage = styled(Img)`
  box-shadow: 0px 30px 48px -18px rgba(0, 0, 0, 0.33);
  margin: 50px 0;
  width: 100%;
`;

const BlogPostContent = styled.div`
  width: 70%;
  line-height: 1.7;

  a {
    color: ${props => props.theme.colours.link};
  }

  @media ${device.mobile} {
    width: 100%;
  }
`;

const ScrollProgressDivContainer = styled.div`
  position: fixed;
  display: absolute;
  height: 500px;
  width: 2px;
  background-color: ${props => props.theme.colours.gray};
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
  @media ${device.mobile} {
    display: none;
  }
`;

const ScrollProgressDiv = styled.div`
  height: ${props => props.percentScrolled}%;
  transition: ${props => props.percentScrolled / 100}s;
  width: 2px;
  background-color: ${props => props.theme.colours.text};
`;

// https://davidwalsh.name/javascript-debounce-function
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export default function Blog({ data }) {
  const { markdownRemark: post } = data;
  const [percentScrolled, setPercentScrolled] = React.useState(0);

  const rootElm = React.createRef();

  const calculateAndSetPercentScrolled = debounce(function() {
    const htmlElement = document.documentElement;
    setPercentScrolled(
      (htmlElement.scrollTop /
        (htmlElement.scrollHeight - htmlElement.clientHeight)) *
        100
    );
  }, 200);

  useEffect(() => {
    window.addEventListener('scroll', calculateAndSetPercentScrolled);

    return () =>
      window.removeEventListener('scroll', calculateAndSetPercentScrolled);
  }, []);

  useLayoutEffect(() => {
    console.log(rootElm.current);

    const utterances = document.createElement('script');

    const utterancesConfig = {
      src: 'https://utteranc.es/client.js',
      repo: 'isaac-scarrott/Portfolio-Website-Comments',
      theme: 'photon-dark',
      label: 'comment',
      async: true,
      'issue-term': 'pathname',
      crossorigin: 'anonymous',
    };

    Object.keys(utterancesConfig).forEach(configKey => {
      utterances.setAttribute(configKey, utterancesConfig[configKey]);
    });
    rootElm.current.appendChild(utterances);
  }, []);

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
            <BlogPostImage
              fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
            />
          </ImageContainer>
          <BlogPostContent dangerouslySetInnerHTML={{ __html: post.html }} />
        </BlogPostContainer>
        <div ref={rootElm} />
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
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 2560) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        createdTime
      }
    }
  }
`;
