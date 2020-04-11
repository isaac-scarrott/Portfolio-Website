import React from 'react';
import TypeIt, {TypeItInput} from '@isaac.scarrott/react-type-it';
import styled from 'styled-components';

import LinksBar from './LinksBar';
import PageContainer from '../styles/PageContainer';
import colours from '../styles/colours';

const TypeItStyle = {
  color: colours.black,
  fontSize: '50px',
  textShadow: '0px 20px 30px rgba(89, 127, 124, 0.8)',
  fontWeight: 'light'
};

const TypeItWrapper = styled.div`
  margin: auto;
`;

const typewriteData = [
  { text: `Hi, I'm Isaac Scarrott`, backspace: 0, delay: 0, duration: 1200 },
  { text: "a software develoepr", backspace: 14, delay: 3000, duration: 2000 },
  { text: "per", backspace: 3, delay: 250, duration: 500 },
  { text: "feel free to have a look around :)", backspace: 24, delay: 3000, duration: 2000 },
  { text: "", backspace: 0, delay: 3000, duration: 2000 }
];

function TypedAnimation() {
  return (
    <TypeItWrapper>
      <TypeIt loop style={TypeItStyle}>
        {typewriteData.map((typewriteItem, index) => {
          return (
            <TypeItInput
              // key={String(index)}
              backspace={typewriteItem.backspace}
              delay={typewriteItem.delay}
              duration={typewriteItem.duration}
            >
              {typewriteItem.text}
            </TypeItInput>
          );
        })}
      </TypeIt>
    </TypeItWrapper>
  );
}

export default function LandingScreen() {
  return (
    <PageContainer>
      <LinksBar />
      <TypedAnimation/>
    </PageContainer>
  );
}
