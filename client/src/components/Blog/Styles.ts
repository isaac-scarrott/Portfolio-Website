import { PageContainer, colour } from "../../utils/Styles";
import styled from "styled-components";

export const BlogPageContainer = styled(PageContainer)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const BlogTitleContainer = styled.h1`
  height: 5%;
  display: flex;
  align-items: flex-end;
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
  /* background-color: lightgray; */
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
  height: "20%";
  margin: 0 10px;
`;

export const BlogEntryDate = styled.p`
  display: "flex";
  align-items: center;
  height: "10%";
  margin: 0 10px;
  color: gray;
  font-size: 15px;
  float: right;
  font-weight: 600;
`;
