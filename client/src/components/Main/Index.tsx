import React from "react";
import styled from "styled-components";

import TypeIt, { TypeItInput } from "@isaac.scarrott/react-type-it";

import {typedTextAnimationStyle} from './Styles'

import { PageContainer } from "../../utils/Styles";

const MainPageContainer = styled(PageContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function MainPage() {
  return (
    <MainPageContainer>
        <TypeIt loop style={typedTextAnimationStyle}>
          <TypeItInput duration={1200}>Hi, I'm Isaac Scarrott</TypeItInput>
          <TypeItInput backspace={14} delay={3000}>
            a software develoepr
          </TypeItInput>
          <TypeItInput backspace={3} delay={250} duration={500}>
            per
          </TypeItInput>
          <TypeItInput backspace={24} delay={3000}>
            feel free to have a look around :)
          </TypeItInput>
          <TypeItInput delay={3000}> </TypeItInput>
        </TypeIt>
    </MainPageContainer>
  );
}
