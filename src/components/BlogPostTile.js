import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

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
    box-shadow: 0px 30px 48px -18px rgba(0, 0, 0, 0.33);
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
    color: ${props => props.theme.colours.darkGray};
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

export default function BlogPostTile({
  path,
  image,
  title,
  timeToRead,
  date = null,
}) {
  const formattedDate = date ? dayjs(date).format('MMM YYYY') : '';

  const timeToReadString = timeToRead ? `${timeToRead} min read` : '';

  return (
    <Link to={path}>
      <BlogEntryContainer>
        {typeof image === 'string' ? (
          <img src={image} alt={title + ' image'} />
        ) : (
          <Img fluid={image} alt={title + ' image'} />
        )}
        <h3>{title}</h3>
        <BlogEntryTimeToRead>{timeToReadString}</BlogEntryTimeToRead>
        <BlogEntryDate>{formattedDate}</BlogEntryDate>
      </BlogEntryContainer>
    </Link>
  );
}
