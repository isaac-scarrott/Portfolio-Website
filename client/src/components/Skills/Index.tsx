import React from "react";

import { PageContainer, colour } from "../../utils/Styles";
import styled from "styled-components";

import { IconType } from "../../../node_modules/react-icons/lib/cjs/iconBase";
import { FaReact, FaAws, FaGitAlt } from "react-icons/fa";
import { DiNodejs, DiPhp } from "react-icons/di";


const SkillsPageContainer = styled(PageContainer)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SkillsTitleContainer = styled.h1`
  height: 10%;
  position: absolute;
  display: flex;
  align-items: center;
  color: ${colour.primary};
`;

const SkillsContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${colour.primary};
  flex-grow: 1;
  width: 100%;
  justify-content: space-evenly;
`;

const SkillsItemContainer = styled.span`
  transition: transform 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const skillsComponents = [
  DiNodejs,
  FaReact,
  FaAws,
  FaGitAlt,
  DiPhp
];

export default function SkillsPage() {
  return (
    <SkillsPageContainer>
      <SkillsTitleContainer>Skills</SkillsTitleContainer>
      <SkillsContainer>
        {skillsComponents.map((component: IconType): React.ReactElement =>
          <SkillsItemContainer>
            {React.createElement(component, { size: 100 })}
          </SkillsItemContainer>
        )}
      </SkillsContainer>
    </SkillsPageContainer>
  );
}
