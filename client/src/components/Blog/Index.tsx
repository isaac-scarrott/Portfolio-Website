import React, { useState, useEffect } from "react";

import { PageContainer, colour } from "../../utils/Styles";
import styled from "styled-components";

const BlogPageContainer = styled(PageContainer)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BlogTitleContainer = styled.h1`
  height: 5%;
  display: flex;
  align-items: flex-end;
  color: ${colour.primary};
`;

const BlogEntriesContainer = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 50% 50%;
  flex-grow: 1;
  width: 80%;
  margin: 4%;
`;

const BlogEntryContainer = styled.div`
  /* background-color: lightgray; */
  margin: 5%;
  transition: transform 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

const BlogEntryImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 70%;
  max-height: 70%;
  border-radius: 2px;
`;

const BlogEntryTitle = styled.h3`
  display: flex;
  align-items: center;
  height: '20%';
  margin: 0 10px;
`;

const BlogEntryDate = styled.p`
  display: "flex";
  align-items: center;
  height: "10%";
  margin: 0 10px;
  color: gray;
  font-size: 15px;
  float: right;
  font-weight: 600;
`;

const BlogPosts = [
  {
    imgSrc: "https://user-images.githubusercontent.com/55145819/65044068-6d0e2780-d986-11e9-9eb0-96c222ce4a09.png",
    title: `Why you should use a consistent ref...and why you shouldn't care`,
    date: 'March 2020'
  }
];

const comingSoonData = {
  imgSrc: "https://www.seedprod.com/wp-content/uploads/2019/09/Best-coming-soon-pages.jpg",
  title: `Coming Soon`,
  date: ''
};

export default function BlogPage() {
  const [blogPostsData, setBlogPostsData] = useState(BlogPosts);

  useEffect(() => {
    if (blogPostsData?.length < 8) {
      const comingSoonBlogPosts = Array(6 - blogPostsData.length).fill(comingSoonData);

      setBlogPostsData([...blogPostsData, ...comingSoonBlogPosts]);
    }
  }, [])

  return (
    <BlogPageContainer>
      <BlogTitleContainer>Blog</BlogTitleContainer>
      <BlogEntriesContainer>
        {blogPostsData.map((blogPostData) => (
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
