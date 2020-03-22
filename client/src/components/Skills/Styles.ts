import { PageContainer, colour } from "../../utils/Styles";
import styled from "styled-components";

export const SkillsPageContainer = styled(PageContainer)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SkillsTitleContainer = styled.h1`
  height: 10%;
  position: absolute;
  display: flex;
  align-items: center;
  color: #597f7c;
`;

export const SkillsContainer = styled.div`
  display: flex;
  padding: 1% 0;
  align-items: center;
  background-color: ${colour.primary};
  color: ${colour.secondary};
  width: 100%;
  justify-content: space-evenly;
  margin: auto 0;
`;

export const SkillsItemContainer = styled.span`
  transition: transform 0.2s;
  &:hover {
    /* cursor: pointer; */
    transform: scale(1.1);
  }
`;
