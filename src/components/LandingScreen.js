import React from 'react';

import TypedAnimation from './TypedAnimation';
import PageContainer from '../styles/PageContainer';

const typewriteData = [
  { text: `Hi, I'm Isaac Scarrott`, backspace: 0, delay: 0, duration: 1200 },
  { text: 'a software developer', backspace: 14, delay: 3000, duration: 2000 },
  { text: 'per', backspace: 3, delay: 250, duration: 500 },
  {
    text: 'feel free to have a look around :)',
    backspace: 24,
    delay: 3000,
    duration: 2000,
  },
  { text: '', backspace: 0, delay: 3000, duration: 2000 },
];

export default function LandingScreen() {
  return (
    <PageContainer>
      <TypedAnimation typewriteData={typewriteData} loop={true} />
    </PageContainer>
  );
}
