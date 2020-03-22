import { PageContainer, colour } from "../../utils/Styles";
import styled from "styled-components";

export const BlogPostContainer = styled(PageContainer)``;

export const BlogPostTitleContainer = styled.div`
  margin-top: 0px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colour.primary};
`;

export const BlogPostTitle = styled.h1`
  font-size: 24px;
  color: ${colour.offWhite};
  display: flex;
  align-items: center;
  flex-grow: 4;
`;

export const BlogPostDate = styled.p`
  font-size: 15px;
  color: ${colour.secondary};
  flex-grow: 1;
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

export const BlogPostContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${colour.primary};
  margin-bottom: 10px;
`;

export const BlogPostImage = styled.img`
  padding: 10px;
  width: 50vw;
`;

export const BlogPostTextContainer = styled.div`
  color: ${colour.primary};
  width: 50vw;
`;
