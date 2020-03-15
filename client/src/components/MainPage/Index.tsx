import React from "react";
import styled from "styled-components";

import {TypeWriter, TypeWriterInput} from '../Typerwriter/Index'

import { colour } from "../../utils/Styles";

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${colour.offWhite};
`;

export default function MainPage() {
  return (
    <PageContainer>
      <TypeWriter loop>
        <TypeWriterInput>Hi, I'm Isaac Scarrott</TypeWriterInput>
        <TypeWriterInput backspace={14} delay={5000}>a software developer</TypeWriterInput>
        <TypeWriterInput backspace={23} delay={5000}> know about ES6, React, and Node</TypeWriterInput>
      </TypeWriter>
    </PageContainer>
  );
}
