import React, { useState } from 'react';
import styled from 'styled-components';

import PageContainer from '../styles/PageContainer';

const BlogPageContainer = styled(PageContainer)`
  flex-direction: column;
  align-items: center;
`;

export const BlogTitleContainer = styled.h1`
  height: 5%;
  display: flex;
  color: #597f7c;
`;

export const BlogEntriesContainer = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 50% 50%;
  flex-grow: 1;
  width: 80%;
  margin: 4%;
`;

export const BlogEntryContainer = styled.div`
  margin: 5%;
  transition: transform 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

export const BlogEntryImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 70%;
  max-height: 70%;
  border-radius: 2px;
`;

export const BlogEntryTitle = styled.h3`
  display: flex;
  align-items: center;
  height: '20%';
  margin: 0 10px;
`;

export const BlogEntryDate = styled.p`
  display: 'flex';
  align-items: center;
  height: '10%';
  margin: 0 10px;
  color: gray;
  font-size: 15px;
  float: right;
  font-weight: 600;
`;

const BlogPosts = [
  {
    id: 1,
    imgSrc: 'https://hackernoon.com/hn-images/1*sby1Jwafc8jkPSbCfAgTnw.jpeg',
    title: `Why you should use a consistent ref...and why you shouldn't care`,
    date: 'March 2020',
  },
];

const comingSoonData = {
  id: 1,
  imgSrc:
    'https://www.seedprod.com/wp-content/uploads/2019/09/Best-coming-soon-pages.jpg',
  title: `Coming Soon`,
  date: '',
};

function getBlogPostsWithComingSoonfillers() {
  let comingSoonBlogPosts = [];

  if (BlogPosts?.length < 8) {
    comingSoonBlogPosts = Array(6 - BlogPosts.length).fill(comingSoonData);
  }

  return [...BlogPosts, ...comingSoonBlogPosts];
}

export default function BlogPage() {
  return (
    <BlogPageContainer>
      <BlogTitleContainer>Blog</BlogTitleContainer>
      <BlogEntriesContainer>
        {getBlogPostsWithComingSoonfillers().map((blogPostData, index) => (
          <BlogEntryContainer>
            <BlogEntryImage src={blogPostData.imgSrc} />
            <BlogEntryTitle>{blogPostData.title}</BlogEntryTitle>
            <BlogEntryDate>{blogPostData.date}</BlogEntryDate>
          </BlogEntryContainer>
        ))}
        ;
      </BlogEntriesContainer>
    </BlogPageContainer>
  );
}
