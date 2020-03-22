import styled from "styled-components";
import {
  TiDocumentText,
  TiSocialGithubCircular,
  TiSocialLinkedinCircular
} from "react-icons/ti";

import { PageContainer, colour } from "../../utils/Styles";

export const typedTextAnimationStyle = {
  color: '#597F7C',
  fontSize: "50px",
  margin: 'auto'
};

export const MainPageContainer = styled(PageContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinksContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: start;
  height: 100px;
  width: 400px;
  color: ${colour.primary};
`;

const linkStyle = `
  transition: transform 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Links = {
  Github: styled(TiSocialGithubCircular)`${linkStyle}`,
  LinkedIn: styled(TiSocialLinkedinCircular)`${linkStyle}`,
  Cv: styled(TiDocumentText)`${linkStyle}`,
};