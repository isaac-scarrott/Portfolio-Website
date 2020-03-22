import React from "react";
import TypeIt, { TypeItInput } from "react-type-it";

import {
  MainPageContainer,
  typedTextAnimationStyle,
  LinksContainer,
  Links
} from "./Styles";

const linksArray = [
  { component: Links.Github, link: "https://github.com/isaac-scarrott" },
  {
    component: Links.LinkedIn,
    link: "https://www.linkedin.com/in/isaac-scarrott/"
  },
  {
    component: Links.Cv,
    link: "http://isaacscarrott.co.uk/Isaac%20Scarrott%20CV.pdf"
  }
];

function LinksBar() {
  return (
    <LinksContainer>
      {linksArray.map((linkObject, index) => (
        <a
          key={String(index)}
          href={linkObject.link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <linkObject.component size={40} />
        </a>
      ))}
    </LinksContainer>
  );
}

const typewriteData = [
  { text: `Hi, I'm Isaac Scarrott`, backspace: 0, delay: 0, duration: 1200 },
  { text: "a software develoepr", backspace: 14, delay: 3000, duration: 2000 },
  { text: "per", backspace: 3, delay: 250, duration: 500 },
  { text: "feel free to have a look around :)", backspace: 24, delay: 3000, duration: 2000 },
  { text: "", backspace: 0, delay: 3000, duration: 2000 }
];

function TypedAnimation() {
  return (
    <div>
      <TypeIt loop style={typedTextAnimationStyle}>
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
    </div>
  );
}

export default function MainPage() {
  return (
    <MainPageContainer>
      <LinksBar />
      <TypedAnimation />
    </MainPageContainer>
  );
}
