import React from "react";
import styled from "styled-components";

import TypeIt, {TypeItInput} from '@isaac.scarrott/react-type-it';

import { colour } from "../../utils/Styles";

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${colour.offWhite};
`;

export default function MainPage() {
  return (
    <PageContainer>
      <TypeIt loop style={{ color: "red" }}>
        <TypeItInput>Hi, this is a react type it demo</TypeItInput>
        <TypeItInput backspace={28} delay={2000}>I hope you like this packgae</TypeItInput>
        <TypeItInput backspace={3} duration={600} delay={700}>age</TypeItInput>
        <TypeItInput backspace={28} delay={2000}>this is also my first NPM package</TypeItInput>
      </TypeIt>
    </PageContainer>
  );
}
