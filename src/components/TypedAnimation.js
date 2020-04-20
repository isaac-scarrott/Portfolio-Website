import React from 'react';
import TypeIt, { TypeItInput } from '@isaac.scarrott/react-type-it';
import styled from 'styled-components';
import device from '../styles/mediaQueryStuff';
import { hexToRgb } from '../utils/colourConverter';

const TypeItWrapper = styled.div`
  margin: auto;
  color: ${props => props.theme.colours.text};
  font-size: 50px;
  text-shadow: 0px 20px 30px
    rgba(${props => hexToRgb(props.theme.colours.text)}, 0.8);
  font-weight: light;
  @media ${device.mobile} {
    font-size: 20px;
  }
`;

export default function TypedAnimation({ typewriteData, loop = true }) {
  return (
    <TypeItWrapper>
      <TypeIt loop={loop}>
        {typewriteData.map((typewriteItem, index) => {
          return (
            <TypeItInput
              key={String(index)}
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
