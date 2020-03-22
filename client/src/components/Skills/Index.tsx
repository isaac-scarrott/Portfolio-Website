import React from "react";
import { IconType } from "../../../node_modules/react-icons/lib/cjs/iconBase";
import { FaReact, FaAws, FaGitAlt } from "react-icons/fa";
import { DiNodejs, DiPhp } from "react-icons/di";
import {SkillsPageContainer, SkillsTitleContainer, SkillsContainer, SkillsItemContainer} from './Styles';

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
        {skillsComponents.map((component: IconType, index): React.ReactElement =>
          <SkillsItemContainer key={String(index)}>
            {React.createElement(component, { size: 100 })}
          </SkillsItemContainer>
        )}
      </SkillsContainer>
    </SkillsPageContainer>
  );
}
