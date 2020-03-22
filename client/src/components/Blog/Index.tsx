import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  BlogPageContainer,
  BlogTitleContainer,
  BlogEntriesContainer,
  BlogEntryContainer,
  BlogEntryImage,
  BlogEntryTitle,
  BlogEntryDate
} from './Styles';

const BlogPosts = [
  {
    id: 1,
    imgSrc: "https://hackernoon.com/hn-images/1*sby1Jwafc8jkPSbCfAgTnw.jpeg",
    title: `Why you should use a consistent ref...and why you shouldn't care`,
    date: "March 2020"
  }
];

const comingSoonData = {
  id: 1,
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
        {blogPostsData.map((blogPostData, index) => (
          <Link to={`/blog/${blogPostData.id}`} key={String(index)}>
            <BlogEntryContainer>
              <BlogEntryImage src={blogPostData.imgSrc} />
              <BlogEntryTitle>{blogPostData.title}</BlogEntryTitle>
              <BlogEntryDate>{blogPostData.date}</BlogEntryDate>
            </BlogEntryContainer>
          </Link>
        ))}
        ;
      </BlogEntriesContainer>
    </BlogPageContainer>
  );
}
